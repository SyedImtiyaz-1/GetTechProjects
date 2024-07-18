from io import BytesIO
import typer
import requests
from datetime import datetime
from config import API_URL
from PIL import Image

app = typer.Typer()

def default_date():
    return datetime.now().strftime('%Y-%m-%d')

@app.command()
def fetch_image(date: datetime = typer.Argument(default=default_date, formats=['%Y-%m-%d'])):
    print("Sending API request...")
    dt = date.strftime('%Y-%m-%d')

    try:
        # add the 'date' query parameter to the NASA API call
        url_for_date = f"{API_URL}&date={dt}"
        response = requests.get(url_for_date)

        # raise error if request fails
        response.raise_for_status()

        url = response.json()['url']
        
        # fetch the Image from the url, and create PIL.Image object
        print("Fetching Image...")
        image_response = requests.get(url)
        image_response.raise_for_status()
        image = Image.open(BytesIO(image_response.content))

        # show image on user's desktop
        image.show()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}. Invalid date or the image for today is not updated by NASA yet.")
    except KeyError:
        print("Error: The API response did not contain an 'url' key. The image for the given date may not be available.")

if __name__ == '__main__':
    app()


#ENTER THIS IN TERMINAL WINDOW (DATE IN GIVEN FORMATE) : python .\main.py %Y-%m-%d 

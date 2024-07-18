from io import BytesIO
import typer
import requests
from datetime import datetime
from config import API_URL
from PIL import Image


app = typer.Typer()

default_date = typer.Argument(
    datetime.now().strftime('%Y-%m-%d'),
    formats=['%Y-%m-%d']
)

@app.command()
def fetch_image(date: datetime = default_date):
    print("Sending API request...")
    dt = str(date.date())

    # add the 'date' query parameter to the NASA API call
    url_for_date = f"{API_URL}&date={dt}"
    response = requests.get(url_for_date)
    

    # raise error if request fails
    response.raise_for_status()

    url=response.json()['url']
    
    # fetch the Image from the url, and create PIL.Image object
    print("Fetching Image...")
    image_response = requests.get(url)
    image = Image.open(BytesIO(image_response.content))

    # show image on user's desktop
    image.show()

if __name__ == '__main__':
    app()

#ENTER THIS IN TERMINAL WINDOW (DATE IN GIVEN FORMATE) : python .\main.py %Y-%m-%d 
import json
import turtle
import urllib.request
import time
import webbrowser

def fetch_astronauts():
    url = "http://api.open-notify.org/astros.json"
    try:
        response = urllib.request.urlopen(url)
        result = json.loads(response.read())
        with open("iss.txt", "w") as file:
            file.write(f"There are currently {result['number']} astronauts on the ISS:\n\n")
            for person in result['people']:
                file.write(f"{person['name']}\n")
    except Exception as e:
        print(f"Error fetching astronauts: {e}")

def track_iss():
    display = turtle.Screen()
    display.setup(1280, 720)
    display.setworldcoordinates(-180, -90, 180, 90)
    display.bgpic("map.gif")
    display.register_shape("iss.gif")

    iss = turtle.Turtle()
    iss.shape("iss.gif")
    iss.penup()

    try:
        while True:
            url = "http://api.open-notify.org/iss-now.json"
            response = urllib.request.urlopen(url)
            result = json.loads(response.read())
            
            location = result["iss_position"]
            lat = float(location['latitude'])
            lon = float(location['longitude'])

            print(f"\nLatitude: {lat}")
            print(f"Longitude: {lon}")

            iss.goto(lon, lat)
            time.sleep(1)  # Adjust sleep time as needed
    except Exception as e:
        print(f"Error tracking ISS: {e}")
    finally:
        display.bye()

if __name__ == "__main__":
    fetch_astronauts()
    track_iss()

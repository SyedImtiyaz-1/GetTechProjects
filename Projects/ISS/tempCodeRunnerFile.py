# import json
# import turtle
# import urllib.request
# import time
# import webbrowser
# #import geocoder


# #Free API
# url = "http://api.open-notify.org/astros.json"
# # Opening the url using request module
# response = urllib.request.urlopen(url)
# #Loading the json file (reading it)
# result = json.loads(response.read())
# #Opening the text file
# file = open("iss.txt", "w")
# file.write("There are currently " +
#            str(result["number"]) + " astronauts on the ISS: \n\n")
# astronaut = result["people"]
# for p in astronaut:
#     file.write(p['name'] + "\n")
# # print long and lat of my location
# #gps = geocoder.ip('me')
# #file.write("\nMy current latitude and longitude is: " + str(gps.latlng))
# file.close()
# webbrowser.open("iss.txt")

# # Setup the world map in turtle module
# display = turtle.Screen()
# display.setup(1280, 720)
# display.setworldcoordinates(-180, -90, 180, 90)

# # load the world map image
# display.bgpic("map.gif")
# display.register_shape("iss.gif")
# iss = turtle.Turtle()
# iss.shape("iss.gif")
# iss.setheading(45)
# iss.penup()

# while True:
#     # load the current status of the ISS in real-time
#     url = "http://api.open-notify.org/iss-now.json"
#     response = urllib.request.urlopen(url)
#     result = json.loads(response.read())

#     # Extract the ISS location
#     location = result["iss_position"]
#     lat = location['latitude']
#     lon = location['longitude']

#     # Ouput lon and lat to the terminal
#     lat = float(lat)
#     lon = float(lon)
#     print("\nLatitude: " + str(lat))
#     print("\nLongitude: " + str(lon))

#     # Update the ISS location on the map
#     iss.goto(lon, lat)

#     # Refresh each 5 seconds
#     time.sleep(1)    

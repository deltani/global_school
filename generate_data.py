"""
This file generates mockup data
"""
import json
import numpy as np
import random

def daterange(date1, date2):
    for n in range(int ((date2 - date1).days)+1):
        yield date1 + timedelta(n)

path_names = "names/random-name/first-names.json"
path_surnames = "names/random-name/names.json"
path_places = "names/random-name/places.json"

number_users = 20
users = []
organisations = []
projects = []

with open(path_names) as f:
    all_names = json.load(f)

with open(path_surnames) as f:
    all_surnames = json.load(f)

with open(path_places) as f:
    all_address = json.load(f)

id = range(0, number_users + 1)
firstNames = np.random.choice(all_names, number_users)
lastNames = np.random.choice(all_surnames, number_users)

usernames = []
for i in range(0, len(firstNames)):
    usernames.append(firstNames[i].lower() + "_" + lastNames[i].lower())

emails = []
for i in range(0, len(firstNames)):
    emails.append(usernames[i] + "@lyceum-alpinum.ch")

phones = []
for i in range(0, len(firstNames)):
    phones.append(random.randint(41791000000,41799999999))

list_degree = ["High School", "Bachelor", "Master", "PhD"]
degrees = []
for i in range(0, len(firstNames)):
    degrees.append(list_degree[random.randint(0, 3)])

for i in range(0, len(firstNames)):
    users.append({"id": i,
                  "username": usernames[i],
                  "pwd": "securepass",
                  "phone": phones[i],
                  "email": emails[i],
                  "degree": degrees[i],
                  "firstName": firstNames[i],
                  "lastName": lastNames[i]})
"""
Projects
"""
projects = []

titles = ["Data Literacy", "Digital Balance",
          "Flip Teaching Action", "Global School",
          "Individual Speed of Learning",
          "Learning Nomads",
          "Open Educational Resources Repository",
          "Personal Learning Data Logbook",
          "Self-Developed 3D learning Simulations",
          "Sport, Sleep, Achieve?",
          "Student Feedback"]
list_statuses = ["available", "ongoing", "finished"]

statuses = []
for i in range(0, len(titles)):
    statuses.append(list_statuses[random.randint(0, 2)])

assignedUserss = []
for i in range(0, len(titles)):
    user_list = []
    for i in range(0, 3):
        user_list.append(random.randint(1, 20))
    assignedUserss.append(user_list)

supervisors = []
for i in assignedUserss:
    supervisors.append(i[0])

for i in range(0, len(titles)):
    projects.append({"title": titles[i],
                     "supervisor": supervisors[i],
                     "status": statuses[i],
                     "assignedUsers": assignedUserss[i]})


import json
with open('users.json', 'w') as outfile:
    json.dump(users, outfile)

with open('projects.json', 'w') as outfile:
    json.dump(projects, outfile)
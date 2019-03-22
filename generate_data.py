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
descriptions = ["Develop a learning concept that helps students to grasp and work with data in a fun and accessible way. Get moving, get outside! Use the data to connect and contribute to sources of open data.",
                """Tools like Apple's "Screentime" tracking have become increasingly popular as a reaction of the problem (even Tech Companies realising themselves that their products rare harmful in not so specific use cases anymore). Today, teenagers start realizing how their screen time has increased, yet there are no tools and even less culture to tackle the reduction of screen time in particular, and in more general what application categories are used for how much time, for example "educational" vs. "social" (many of them are called "social"). My solution is to collect screen time data and visualize it in order to develop a collec-tive understanding and/or tool to work on the reduction of screen time (digital-off-screen balance) and the balance of application use (reflexive application use balance).""",
                """The integration of technology in the classroom allows to “flip” the classroom. This means that the accumulation of theoretical information can happen individually on digital learning platforms which then sets more space for higher order activities such as group discussion and problem solving during class time.""",
                """A platform that integrates experts that are willing to support teachers and provide extra material, videos, explanations and workshops/visits to the schools to show how one or another topic is applied in the real life, and emphasize the importance of it. Students will have a possibility to not only reach out to experts from industry, but to take responsibility for organiz-ing events and case studies, as well as build up and expand existing community.""",
                """A platform that integrates experts that are willing to support teachers and provide extra material, videos, explanations and workshops/visits to the schools to show how one or another topic is applied in the real life, and emphasize the importance of it. Students will have a possibility to not only reach out to experts from industry, but to take responsibility for organiz-ing events and case studies, as well as build up and expand existing community.""",
                """We are developing a project in which students learn on a journey or expedition in encounters with the "real world" and digitally process and share what they have learned. Our project outlines possible paths and goals, tasks and encounters and ex-amines variants of the documentation of what has been learned and experienced. In the process, space is also to be given to chance and encounters that are not explicitly sought after.""",
                """During the Hackathon we would first build an OER repository for your school and subsequently we would try to make it accessible for the Swiss OER community.""",
                """Enable students to record and use their learning data in a se-cure way with a Personal Learning Data Logbook (PLDL). Many universities and further education institutes provide digital and virtual learning environments (VLEs). """,
                """The project aims to: 1) enable students to document and analyse their sport and sleep cycles 2) improve their understanding of its effect on their cognitive strength 3) incentivise students to sleep and do sports regularly.""",
                """We develop a tool (an app, an online questionnaire ...) with which the feedback can be obtained/given and documented accord-ing to the criteria mentioned.""",
                """A tool will be developed in the collaboration of teachers, pu-pils, programmers and a feedback expert."""]
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
                     "assignedUsers": assignedUserss[i],
                     "description": descriptions[i]})


import json
with open('users.json', 'w') as outfile:
    json.dump(users, outfile)

with open('projects.json', 'w') as outfile:
    json.dump(projects, outfile)
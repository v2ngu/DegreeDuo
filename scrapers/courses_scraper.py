import json

# Current askes for input in terminal will probably change to another input source
course_name = input("Enter the name of the course: ")

# Initialize variables that will probably be accessed later
course_id = "N/a"
course_name = "N/a"
course_day = "N/a"
course_hour = "N/a"
course_room = "N/a"
course_instruct_mode = "N/a"
course_instruct_name = "N/a"
course_status = "N/a"
course_flags = "N/a"

# Course Data Scraper -------------------------------------------------------

# Open the JSON file and load its contents
with open('courses.json') as f:
    data = json.load(f)

# Search for the course in the JSON data
found_course = None
for course in data:
    if course['Course Name'] == course_name:
        found_course = course
        break

# Print the information if the course is found
if found_course:
    course_id = found_course['Course ID']
    course_name = found_course['Course Name']
    course_day = found_course['Day']
    course_hour = found_course['Hour']
    course_room = found_course['Room']
    course_instruct_mode = found_course['Instruction Mode']
    course_instruct_name = found_course['Instructor Name']
    course_status = found_course['Status']
    course_flags = found_course['Flags']
else:
    print("Course not found.")
    
# ---------------------------------------------------------------------------   

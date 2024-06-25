from flask import Flask, request, jsonify
from flask_cors import CORS

import json

# Define the Course class
class Course:
    def __init__(self, department, course_id, course_name, day, hour, room, instruction_mode, instructor_name, status, flags, level, coreCurriculum):
        self.department = department
        self.course_id = course_id
        self.course_name = course_name
        self.day = day
        self.hour = hour
        self.room = room
        self.instruction_mode = instruction_mode
        self.instructor_name = instructor_name
        self.status = status
        self.flags = flags
        self.level = level
        self.coreCurriculum = coreCurriculum

    @classmethod
    def from_json(cls, data):
        return cls(
            data["Department"],
            data["Course ID"],
            data["Course Name"],
            data["Day"],
            data["Hour"],
            data["Room"],
            data["Instruction Mode"],
            data["Instructor Name"],
            data["Status"],
            data["Flags"],
            data["Level"],
            data["Core Curriculum"]
        )

# Read data from the JSON file
with open("coursesdata.json") as f:
    courses_data = json.load(f)

# Create Course objects from the JSON data and add them to the list
courses = [Course.from_json(course) for course in courses_data]

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/search', methods=['GET'])
def search_courses():
   
    data = request.args

    search_option = data.get("searchOption")
    results = []

    if search_option == "Department and Level":
        department_input = data.get("department")
        level_input = data.get("level")
        for course in courses:
            if course.department == department_input and course.level == level_input:
                results.append(course.__dict__)
    elif search_option == "Core Curriculum and Flags":
        cc_input = data.get("coreCurriculum")
        flags_input = data.get("flags")
        print(f"Searching by Core Curriculum and Flags: {cc_input}, {flags_input}")  # Debug statement
        for course in courses:
            if course.coreCurriculum == cc_input:
                if not flags_input or any(flag in course.flags for flag in flags_input):
                    results.append(course.__dict__)
    elif search_option == "Unique Number":
        uniqueNumber = data.get("uniqueNumber")
        for course in courses:
            if (course.course_id) == uniqueNumber:
                results = course.__dict__
    else:
        return jsonify({"error": "Search Option Error"}), 400

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)

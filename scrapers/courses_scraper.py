from flask import Flask, request, jsonify
import json

# Define the Course class
class Course:
    def __init__(self, department, course_id, course_name, day, hour, room, instruction_mode, instructor_name, status, flags, level, cc):
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
        self.cc = cc

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

@app.route('/search', methods=['POST'])
def search_courses():
    data = request.json
    search_option = data.get("searchOption")
    results = []

    if search_option == "Department and Level":
        department_input = data.get("department")
        level_input = data.get("level")
        for course in courses:
            if course.department == department_input and course.level == level_input:
                results.append(course.__dict__)
    elif search_option == "Core Curriculum and Flags":
        cc_input = data.get("cc")
        flags_input = data.get("flags")
        for course in courses:
            if course.cc == cc_input:
                if not flags_input or any(flag in course.flags for flag in flags_input):
                    results.append(course.__dict__)
    elif search_option == "Unique Number":
        unique_number = data.get("uniqueNumber")
        for course in courses:
            if course.course_id == unique_number:
                results.append(course.__dict__)
    else:
        return jsonify({"error": "Search Option Error"}), 400

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)

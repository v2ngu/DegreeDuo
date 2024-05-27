from flask import Flask, jsonify, request
import ratemyprofessor

app = Flask(__name__)

@app.route('/api/professor', methods=['GET'])
def get_professor():
    school_name = request.args.get('school')
    professor_name = request.args.get('name')
    school = ratemyprofessor.get_school_by_name(school_name)
    professor = ratemyprofessor.get_professor_by_school_and_name(school, professor_name)

    if professor:
        professor_data = {
            'name': professor.name,
            'department': professor.department,
            'school': professor.school.name,
            'rating': professor.rating,
            'difficulty': professor.difficulty,
            'num_ratings': professor.num_ratings,
            'would_take_again': round(professor.would_take_again, 1) if professor.would_take_again is not None else 'N/A'
        }
        return jsonify(professor_data)
    else:
        return jsonify({'error': 'Professor not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)

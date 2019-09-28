module.exports = function(app){
    var question = require('../controllers/questionController');

    app.route('/questions')
        .get(question.list_all_questions)
        .post(question.create_a_question);

    app.route('/questions/:questionId')
        .get(question.read_a_question)
        .put(question.update_a_question)
        .delete(question.delete_a_question);
}
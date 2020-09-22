export default class TodoService {

    constructor(firebase) {
        this.firestore = firebase.firestore();
        this.collectionName = 'todos'
    }


    addTodo = (data) =>{
        return this.firestore
            .collection(this.collectionName)
            .add(data)
    }
    deleteTodo = (todoId) =>{
        return this.firestore
            .collection(this.collectionName)
            .doc(todoId)
            .delete()
    }
}

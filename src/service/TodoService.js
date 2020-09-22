export default class TodoService {

    constructor(firebase) {
        this.firestore = firebase.firestore();
        this.collectionName = 'todos'
    }

    setData = async (todos) =>{
        return [...JSON.parse(JSON.stringify(todos))];
    };

    addTodo = (data, uid) =>{
        return this.firestore
            .collection('users')
            .doc(uid)
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

class Message{
    constructor(author, text){
        this.author = author;
        this.time = new Date ();
        this.text = text;
    }
    toString(){
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}: ${this.text}`;
    }
}

class Messenger{
    constructor(){
        this.messagesArray = [];
    }
    show_history(){
        this.messagesArray.forEach(item=>console.log(item));
    }
    send(author, text){
        let message = new Message(author, text);
        this.messagesArray.push(message.toString());
    }
}
let messenger = new Messenger();
// Operation area
messenger.send('Efuwka', 'salam');
messenger.send('Tatyana', 'privet');
messenger.send('Tatyana2', 'privet');
messenger.show_history();
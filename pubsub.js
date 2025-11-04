class PubSub{
    
    constructor(){
        this.subscribers = {}; // {'eventName': [cb_sub1, cb_sub2, cb_sub3]}
    }

    /**
     * @param event -> it is a string denoting unique event fired
     * @param callback -> for a subscribers what method should be executed when an event is fired
     * 
     *  */ 
    subscribe(event, callback){
        if(!this.subscribers[event]){
            // currently no subscribersrs callback was registered for the event
            this.subscribers[event] = [];
        }
        
        this.subscribers[event].push(callback);
    }
    unsubscribe(event, callback){
        if(!this.unsubscribe[event]) return;

        this.subscribers[event] = this.subscribers[event].filter(cb => cb!=callback);
    }
    publish(event, data){
        if(!this.subscribers[event]) return;
        this.subscribers[event].forEach(cb => cb(data));
    }
}

const pb = new PubSub();

const unsubAirforce1 = pb.subscribe('airforce', (data) => console.log("subscriber 1 of airforce", data));
const unsubAirforce2 = pb.subscribe('airforce', (data) => console.log("subscriber 2 of airforce", data));
const unsubNewBalance1 = pb.subscribe('newbalance', (data) => console.log("subscriber 1 of newbalance", data));
pb.publish('airforce', {showName: 'jordan'});
pb.publish('newbalance', {showName: 'something'});
// pb.publish('')

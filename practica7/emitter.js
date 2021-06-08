function Emitter (){
    this.events={}; //INICIALIZAMOS UN OBJETO VACIO
}

Emitter.prototype.on = function(type, listener){ 
    //agregra una funcion al array y la asocia al nombre que llega en "type"
    //listener contiene la funcion que quiere agregarse
    this.events[type]= this.events[type] || [];
    this.events[type].push (listener);  //metemos la funcion al array
}

Emitter.prototype.emit = function(type){ 

    if (this.events[type]){
        this.events[type].forEach(function (listener) {
            listener(); //invocamos a la funcion que coincide con "type"
        });
    }
}

module.exports = Emitter;
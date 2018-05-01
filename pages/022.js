pageComponentry = {
    data: function () {
        return {
            pageTitle: 'How do we transport it?',
            currentSet: 0,
            set0: 0,
            set1: 0,
            set2: 0,
            set3: 0
        }
    },
    methods: {
        checkCorrect:function(set,value){
           var self = this;
            if (this['set' + set] + 1 == value){
                this['set' + set] = this['set' + set] + 1
                if (this.set3 == 4) {
                    console.log ( 'last set')
                    setTimeout(function() {
                    self.currentSet = 4;
                    console.log ( self.currentSet)
                }, 1000);
                }
            } else {
                $('body').toggleClass('shake');
                
            }
        },
        nextPage: function(){
             window.location.href = "#023";
          }
    },
    ready: function () {

        

    }
}
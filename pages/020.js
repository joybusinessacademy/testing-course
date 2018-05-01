pageComponentry = {
    data: function() {
        return {
            pageTitle: 'How do we transport it?',
            color:'',
            popup: false,
            correct: false,
            text:'',
            textOne: 'Yes, this appears to be large consignment, and there is enough product to fill a truckload, this is an FTL solution.',
            textTwo: 'This bulk order of goods is big enough to fill a truck so that we would consider this and FTL (Full truckload).'
        }
    },
    methods: {
       nextPage: function(){
             window.location.href = "#021";
          }
    },
    ready: function () {
        $.ui.draggable.prototype.destroy = function(ul, item) {};
        
        var self = this;

        $(".my-draggable").draggable({
            // connectToSortable: ".drop-zone",
            revert: "invalid",
            containment: '.hello',
            zIndex:1,
        });

        $(".drop-zone").droppable({
            drop: function(ev, ui) {
                $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);
                if($(this).attr('id') == 'one'){
                    self.popup = true;
                    self.text = self.textOne;
                    self.color = 'green';
                    self.correct = true;
                } else {
                    self.popup = true;
                    self.text = self.textTwo;
                    self.color = 'red';
                    self.correct = false;
                }
            }
        });

    }


}
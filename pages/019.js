pageComponentry = {
    data: function() {
        return {
            pageTitle: 'How do we transport it?',
            color:'',
            popup: false,
            text:'',
            correct: false,
            textOne: 'Not quite, a full truckload or FTL is where a single customer fills the whole truck with their product going to one destination, in this case, remember we would transport this type of consignment straight from A to B. An FTL could be made up from pallets or a combination of Pallets and loose cartons.',
            textTwo: 'Right on, these products could be loaded onto a truck using LTL (less than truckload), we call these “loose items” or Cartons.'
        }
    },
    methods: {
        nextPage: function(){
             window.location.href = "#020";
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
                // console.log($(this).attr('id'));
                if($(this).attr('id') == 'one'){
                    self.popup = true;
                    self.text = self.textOne;
                    self.color = 'red';
                    self.correct = false;
                } else {
                    self.popup = true;
                    self.text = self.textTwo;
                    self.color = 'green';
                    self.correct = true;
                }
            }
        });

    }


}
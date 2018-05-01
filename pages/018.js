pageComponentry = {
    data: function () {
        return {
            pageTitle: 'How do we transport it?',
            popup: false,
            correct: false,
            text: 'Not so fast, small parcels require a different type of freight solution, a courier would be used to deliver this type of product, this is not a service that Mainfreight offers. We do focus on bigger carton sized packages, let’s say items starting from the size of a box for a computer or anything that couriers wouldn\'t handle then we take care of it.',
        }
    },
    methods: {
        nextPage: function(){
             window.location.href = "#019";
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
                if($(this).attr('id')){
                    self.popup = true;
                } else {
                    self.popup = true;
                }
            }
        });

    }
}
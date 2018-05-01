pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Mode - Truck or Road Transport',
            message: '',
            globalCardName: '',
            globalMessage: '',
            goodJob: false,
            popup: false,
            score:0,
            correct: 0,
            cards: [

                {
                    name: "Extreme weather",
                    background: "url('/course-files/course-00-testing/images/png/truck-10.png')",
                    answer:"weakness"
                },
                {
                    name: "Transit times over large distances",
                    background: "url('/course-files/course-00-testing/images/png/truck-3.png')",
                    answer:"weakness"
                },
                {
                    name: "Economical",
                    background: "url('/course-files/course-00-testing/images/png/truck-4.png')",
                    answer:"strength"
                },
                {
                    name: "Go Anywhere",
                    background: "url('/course-files/course-00-testing/images/png/truck-5.png')",
                     answer:"strength"
                },
                {
                    name: "Environmental Impact",
                    background: "url('/course-files/course-00-testing/images/png/truck-8.png')",
                    answer:"weakness"
                },
                {
                    name: "Container",
                    background: "url('/course-files/course-00-testing/images/png/truck-9.png')",
                     answer:"strength"
                },
                {
                    name: "Various load sizes",
                    background: "url('/course-files/course-00-testing/images/png/various.png')",
                     answer:"strength"
                }

            ]
        }
    },
    methods: {
        replayButton: function() {
            this.goodJob = false;
            this.score = 0;
            $(".demo__card").each(function() {
                $(".demo__card").show();

            })
        }
    },
    ready: function() {

        this.$parent.progressLocked({'banana': ''});

        var self = this;

        var animating = false;
        var cardsCounter = 0;
        var numOfCards = 7;
        var decisionVal = 1;
        var pullDeltaX = 0;
        var deg = 0;
        var $card, $cardReject, $cardLike;

        function pullChange() {
            animating = true;
            deg = pullDeltaX / 10;
            $card.css("transform", "translateX(" + pullDeltaX + "px) rotate(" + deg + "deg)");

            var opacity = pullDeltaX / 100;
            var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
            var likeOpacity = (opacity <= 0) ? 0 : opacity;
            $cardReject.css("opacity", rejectOpacity);
            $cardLike.css("opacity", likeOpacity);

        };

        function release() {

            var newCard = $card.children().attr("id");
            var answer = $card.data('answer');

            if (pullDeltaX >= decisionVal) {
                $card.addClass("to-right");
                saveYes(newCard, $card, answer);

            } else if (pullDeltaX <= -decisionVal) {
                $card.addClass("to-left");
                saveNo(newCard, $card, answer);

            }

            if (Math.abs(pullDeltaX) >= decisionVal) {
                $card.addClass("inactive");

                setTimeout(function() {
                    $card.addClass("below").removeClass("inactive to-left to-right");
                    cardsCounter++;
                    if (cardsCounter === numOfCards) {
                        cardsCounter = 0;
                        self.goodJob = true;
                        self.$parent.progressLocked({'banana': 'unlocked'});
                    }
                }, 300);
            }

            if (Math.abs(pullDeltaX) < decisionVal) {
                $card.addClass("reset");
            }

            setTimeout(function() {
                $card.attr("style", "").removeClass("reset")
                    .find(".demo__card__choice").attr("style", "");
                $card.hide();
                pullDeltaX = 0;
                animating = false;
            }, 300);
        };

        function saveYes(newcard, card, answer) {
            if(answer == 'weakness'){

               self.score += 1;
              self.correct = 2;
              setTimeout(function() {
                    self.correct = 0;
                }, 300);
            } else {
               self.correct = 1;
              setTimeout(function() {
                    self.correct = 0;
                }, 300);
            }

        };

        function saveNo(newcard, card, answer) {
            if(answer == 'strength'){

               self.score += 1;
                self.correct = 2;
              setTimeout(function() {
                    self.correct = 0;
                }, 300);
            } else {
               self.correct = 1;
              setTimeout(function() {
                    self.correct = 0;
                }, 300);
            }

        }

        $(document).on("mousedown touchstart", ".demo__card:not(.inactive)", function(e) {
            if (animating) return;

            $card = $(this);
            $cardReject = $(".demo__card__choice.m--reject", $card);
            $cardLike = $(".demo__card__choice.m--like", $card);
            var startX = e.pageX || e.originalEvent.touches[0].pageX;

            $(document).on("mousemove touchmove", function(e) {
                var x = e.pageX || e.originalEvent.touches[0].pageX;
                pullDeltaX = (x - startX);
                if (!pullDeltaX) return;
                pullChange();
            });

            $(document).on("mouseup touchend", function() {
                $(document).off("mousemove touchmove mouseup touchend");
                if (!pullDeltaX) return; // prevents from rapid click events
                release();
            });
        });


    }
}

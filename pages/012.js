pageComponentry = {
    data: function() {
        return {
            pageTitle: 'How do we transport it?',
            image: '12.png',
            image2: '14.png',
            alt: '',
            modal: {
                // The title text in the modal. Can be blank
                title: 'Pick Up Delivery (PUD)',
                // Must be unique
                id: 'modalOne',
                // The text in the button
                buttonText: 'Pick Up Delivery (PUD)',
                // Changes the styling of the modal to fit a full image.
                imageModal: false,
                // Will remove the button styling from the modal button if you want to use something other than text.
                imageButton: true,
            },
            modal2: {
                // The title text in the modal. Can be blank
                title: 'Linehaul',
                // Must be unique
                id: 'modalTwo',
                // The text in the button
                buttonText: 'Linehaul',
                // Changes the styling of the modal to fit a full image.
                imageModal: false,
                // Will remove the button styling from the modal button if you want to use something other than text.
                imageButton: true,
            }
        }
    },
    methods: {
        openPopup: function(i) {
            this.popup = true;
            if (i == 1) {
                this.text = this.pText1;
            } else {
                this.text = this.pText2;
            }
        }
    },
    ready: function() {
        courseFeatureJBA.transitionIn();
        courseFeatureJBA.flexySpeckCheck();
    }


}
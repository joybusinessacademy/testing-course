   pageComponentry = {
    data: function() {
        return {
            pageTitle: 'How do we transport it?',
            image: '25.png',
            image2: '18.png',
            alt: '',
            modal: {
                // The title text in the modal. Can be blank
                title: 'FTL',
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
                title: 'LTL',
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
       
    },
    ready: function() {
        
    }


}
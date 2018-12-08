<!DOCTYPE HTML>
<html>
    <head>
    <?php include 'header.php';?>
        
        <style>
            h1, h2, h3{
                margin: 0;
                font-family: 'Great Vibes', cursive;
            }
            .home2_header h2{
                text-align: center;
                font-size: 49px;
                padding-top: 80px;
                padding-bottom: 30px;
                font-weight: 700;
                color: #333;
                text-shadow: #a2a2a2 1px 1px;
            }
            .home2{
                padding-bottom: 50px;
            }
            .home2_header{
                text-align: center;
                max-width: 800px;
                line-height: 28px;
                margin: 0 auto;
            }
            .home2_header h4{
                font-family: 'Bad Script', cursive;
                font-weight: bold;
                font-size: 23px;
            }
            .contact_cont{
                display: flex;
                justify-content: center;
                font-family: 'Niramit', sans-serif;
            }
            .contact_cont div{
                padding: 20px;
            }

            .map{
                padding: 0;
                max-width: 600px;
                /* width: 100% !important; */
                height: 500px;
            }
            #map-container{
                padding: 0;
                max-width: 850px;
            }
            /* iframe{
                max-width: 800px;
            } */
            .contact1 h4{
                font-weight: bold;
                margin-bottom:10px;
            }
            .gift1 img{
                max-height: 250px;
                margin: 0 auto;
            }
            .gift1{
                text-align: center;
                padding: 180px 20px;
            }

            @media screen and (max-width:900px){
                .contact1{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .map{
                    max-width: 100%;
                }
                .contact_cont{
                    display: block;
                    margin: 0 auto;
                    justify-content: center;
                }
            }
        </style>
    </head>

    <body>
        <div class="page_cont">
            <?php include 'navbar.php'; ?>
            <!--  -->
            <div class="main_cont">
                <div class="home2_header">
                    <h2 class="">
                        Gift Cards
                    </h2>
                    
                    <h4 class="">
                        Coming Soon! (please call <a href="tel:5862476700" class="no_link">(586) 247-6700</a>)
                    </h4>

                    <div id="paypal-button-container"></div>
                    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
                    <script>
                    // Render the PayPal button
                    paypal.Button.render({
                    // Set your environment
                    env: 'sandbox', // sandbox | production

                    // Specify the style of the button
                    style: {
                    layout: 'vertical',  // horizontal | vertical
                    size:   'medium',    // medium | large | responsive
                    shape:  'rect',      // pill | rect
                    color:  'gold'       // gold | blue | silver | white | black
                    },

                    // Specify allowed and disallowed funding sources
                    //
                    // Options:
                    // - paypal.FUNDING.CARD
                    // - paypal.FUNDING.CREDIT
                    // - paypal.FUNDING.ELV
                    funding: {
                    allowed: [
                        paypal.FUNDING.CARD,
                        // paypal.FUNDING.CREDIT
                    ],
                    disallowed: []
                    },

                    // PayPal Client IDs - replace with your own
                    // Create a PayPal app: https://developer.paypal.com/developer/applications/create
                    client: {
                    sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                    production: '<insert production client id>'
                    },

                    payment: function (data, actions) {
                    return actions.payment.create({
                        payment: {
                        transactions: [
                            {
                            amount: {
                                total: '0.01',
                                currency: 'USD'
                            }
                            }
                        ]
                        }
                    });
                    },

                    onAuthorize: function (data, actions) {
                    return actions.payment.execute()
                        .then(function () {
                        window.alert('Payment Complete!');
                        });
                    }
                    }, '#paypal-button-container');
                    </script>
                </div>
                <div class="gift1">
                    <img src="images/gift_card.png">
                </div>
            </div>

        </div>
        <?php include 'footer.php'; ?>
    </body>
</html>
Feature: Ecommerce with cypress

     writting cucumber file for cypress
     Scenario: Go to ecomm page
     Given I go to ecomm page
     When I add items to cart
     |product1|product2|
     |iphone X|Blackberry|
     And Verify the total
     Then select the country submit and verify Thankyou
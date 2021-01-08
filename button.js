class Button{
    constructor(){
        this.india = createButton('INDIA');
        this.vienna = createButton("VIENNA");
        this.costabrava = createButton("COSTA BRAVA");
        this.nyc = createButton('NEW YORK');
        this.edinburgh = createButton('EDINBURGH');
        this.switzerland = createButton("SWITZERLAND");
        this.mauritius = createButton("MAURITIUS");
        this.image = loadImage("bg.png");


    }
    hide(){
        this.vienna.hide();
        this.switzerland.hide();
        this.mauritius.hide();
        this.edinburgh.hide();
        this.costabrava.hide();
        this.nyc.hide();
        this.india.hide();

    }
    display(){
        
        image(this.image,0,0,displayWidth/2,displayHeight/2);
        this.india.position(displayWidth/2-50,displayHeight/2-40);
        this.vienna.position(displayWidth/2-50,displayHeight/2-60);
        this.costabrava.position(displayWidth/2-50,displayHeight/2-80);
        this.edinburgh.position(displayWidth/2-50,displayHeight/2-100);
        this.nyc.position(displayWidth/2-50,displayHeight/2-120);
        this.switzerland.position(displayWidth/2-50,displayHeight/2-140);
        this.mauritius.position(displayWidth/2-50,displayHeight/2-160);


        
       
        
        this.costabrava.mousePressed(()=>{
            this.vienna.hide();
            this.switzerland.hide();
            this.mauritius.hide();
            this.edinburgh.hide();
            this.costabrava.hide();
            this.india.hide();
            this.nyc.hide();
            c = createSprite(displayWidth/2,displayHeight/2,10,10);
            c.addImage(costabravaImg);
            
            drawSprites();
            textSize(20);
            fill("black");
            text("Costa-Brava is well-known for the many resort towns such as Lloret de Mar and Blanes, but the truth is that there are also many hidden gems on the Costa Brava: picturesque towns and typical fishing villages dotted along the rocky coast.Known for its coves of paradise, charming towns and natural parks, this stretch of the Catalan coastline is the perfect destination for a short getaway or a holiday.Tortilla Espanola,Gazpacho and Garlic Prawns are some of the mouthwatreing dishes which make this place famous.The currency in Costa Brava is a Euro",displayWidth/2,displayHeight/2);
            
            
        })
        this.vienna.mousePressed(()=>{
            this.vienna.hide();
            this.switzerland.hide();
            this.mauritius.hide();
            this.edinburgh.hide();
            this.costabrava.hide();
            this.india.hide();
            this.nyc.hide();
            c = createSprite(displayWidth/2,displayHeight/2,10,10);
            c.addImage(viennaImg);
            
            drawSprites();
            textSize(20);
            fill("black");
            text("Vienna, Austria’s capital, lies in the country’s east on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart, Beethoven and Sigmund Freud. The city is also known for its Imperial palaces, including Schönbrunn, the Habsburgs’ summer residence.It is famous for its cultural events, imperial sights, coffee houses, cozy wine taverns, and the very special Viennese charm.The Euro has been the official currency in Vienna,Austria.", displayWidth/2,displayHeight/2)
            
            
        })
        this.switzerland.mousePressed(()=>{
            this.vienna.hide();
            this.switzerland.hide();
            this.mauritius.hide();
            this.edinburgh.hide();
            this.costabrava.hide();
            this.india.hide();
            this.nyc.hide();
            c = createSprite(displayWidth/2,displayHeight/2,10,10);
            c.addImage(switzerlandImg);
            
            drawSprites();
            textSize(20);
            fill("black");
            text("Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps.Switzerland is a beautiful, tourist-attracting country. While it is most famous for its ski resorts during the winter, it is beautiful all year round. Skiing in Switzerland should be on everyone's bucket list. The Alpine mountains stretch across the Balkans to France, making Switzerland the perfect skiing destination.The Swiss cuisine includes the most unique variety of cheese,cold cuts,jams and hot drinks.The Swiss franc is the only official currency in Switzerland.",displayWidth/2,displayHeight/2);
            
            
        })
        this.mauritius.mousePressed(()=>{
            this.vienna.hide();
            this.switzerland.hide();
            this.mauritius.hide();
            this.edinburgh.hide();
            this.costabrava.hide();
            this.india.hide();
            this.nyc.hide();
            c = createSprite(displayWidth/2,displayHeight/2,10,10);
            c.addImage(mauritiusImg);
            drawSprites();
            textSize(20);
            fill("black");
            text("Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests, waterfalls, hiking trails and wildlife like the flying fox.Mauritius is perhaps best known for its wonderful white beaches and the island boasts over 150 km of beaches around its shoreline.The cuisine of Mauritius is a blend of African, Chinese, European and Indian influences in the history of Mauritius.The Mauritian rupee is the currency of Mauritius. One rupee is subdivided into 100 cents.",displayWidth/2,displayHeight/2);
            
            
        })
        this.edinburgh.mousePressed(()=>{
            this.vienna.hide();
            this.switzerland.hide();
            this.mauritius.hide();
            this.edinburgh.hide();
            this.costabrava.hide();
            this.india.hide();
            this.nyc.hide();
            c = createSprite(displayWidth/2,displayHeight/2,10,10);
            c.addImage(edinburghImg);
            
            drawSprites();
            textSize(20);
            fill("black");
            text("Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers.Haggis,Cullen Skink,Cranachan and Scotch Whisky are some of the refreshments which make Edinburgh more famous.Scotland shares the same currency as the rest of the UK : the British pound sterling (£).",displayWidth/2,displayHeight/2);
            
            
        })
        this.india.mousePressed(()=>{
            this.vienna.hide();
            this.switzerland.hide();
            this.mauritius.hide();
            this.edinburgh.hide();
            this.costabrava.hide();
            this.india.hide();
            this.nyc.hide();
            c = createSprite(displayWidth/2,displayHeight/2,10,10);
            c.addImage(indiaImg);
            
            drawSprites();
            textSize(20);
            fill("black");
            text("India, officially the Republic of India, is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world.India is known for its incredible architecture, most notably the Taj Mahal, one of the most famous buildings on Earth and one of the Seven Wonders of the World. India is the 54th most popular country and the 45th most famous. India is described by fans as: Cultural, Atmospheric, The people are great, Good cuisine and Diverse.Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent.Chole Bhature,Rogan Josh,Delhi ki Chaat and Vada Pav are some dishes which are famous in India.The currency of India is Indian Rupees and Paise(₹)",displayWidth/2,displayHeight/2);
            
            
        })
        this.nyc.mousePressed(()=>{
            this.vienna.hide();
            this.switzerland.hide();
            this.mauritius.hide();
            this.edinburgh.hide();
            this.costabrava.hide();
            this.india.hide();
            this.nyc.hide();
            c = createSprite(displayWidth/2,displayHeight/2,10,10);
            c.addImage(nycImg);
            
            drawSprites();
            textSize(30);
            fill("white");
            text("New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.It was the place where immigrants mainly dock first and see the Statue of Liberty, which symbolizes hope and freedom.",displayWidth/2-400,displayHeight/2);
            text("At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.",displayWidth/2-400,displayHeight/2+50);
            text(" Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.",displayWidth/2-400,displayHeight/2+100);
            text("Broadway theater is staged in neon-lit Times Square.",displayWidth/2-400,displayHeight/2+150);
            text("New York is an economic center where major trades take place.",displayWidth/2-400,displayHeight/2+200);
            text("Manhattan clam chowder,New York-style cheesecake,New York-style pizza and Baked pretzels are some meals which are famous in NYC!",displayWidth/2-400,displayHeight/2+250);
            text("The official currency of the United States is the U.S. dollar or American dollar ($, USD, US$).",displayWidth/2-400,displayHeight/2+300);
        })
            

    }
    
}
// Austrian hotels
const austriaHotels = [
  {
    name: "Alpine Retreat",
    location: "Innsbruck, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Charming alpine hotel with stunning mountain views, spa, and cozy rooms.",
    price: {
      min: 150,
      max: 300,
    },
    image: "mountain",
  },
  {
    name: "Vienna Grand Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Luxury hotel in the heart of Vienna with exquisite dining and elegant rooms.",
    price: {
      min: 300,
      max: 600,
    },
    image: "city",
  },
  {
    name: "Salzburg Palace Hotel",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Historic hotel near Salzburg's old town with premium amenities and service.",
    price: {
      min: 250,
      max: 500,
    },
    image: "city",
  },
  {
    name: "Lakeview Resort",
    location: "Hallstatt, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Scenic lakeside resort with modern facilities and stunning views of Hallstatt.",
    price: {
      min: 200,
      max: 400,
    },
    image: "lake",
  },
  {
    name: "Danube Riverside Hotel",
    location: "Linz, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Comfortable hotel on the banks of the Danube with easy city access.",
    price: {
      min: 100,
      max: 250,
    },
    image: "river",
  },
  {
    name: "Tyrolean Lodge",
    location: "Kitzbühel, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Traditional lodge in Kitzbühel with ski-in/ski-out access and cozy atmosphere.",
    price: {
      min: 180,
      max: 350,
    },
    image: "mountain",
  },
  {
    name: "Graz Central Hotel",
    location: "Graz, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Modern hotel in the heart of Graz with contemporary amenities and design.",
    price: {
      min: 160,
      max: 320,
    },
    image: "city",
  },
  {
    name: "Alps Resort",
    location: "Zell am See, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Resort hotel with breathtaking alpine views and a range of outdoor activities.",
    price: {
      min: 190,
      max: 380,
    },
    image: "mountain",
  },
  {
    name: "Vienna Boutique Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Chic boutique hotel in Vienna with stylish rooms and personalized service.",
    price: {
      min: 140,
      max: 280,
    },
    image: "city",
  },
  {
    name: "Seaside Hotel",
    location: "Bregenz, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Cozy hotel near Lake Constance with beautiful views and comfortable rooms.",
    price: {
      min: 130,
      max: 260,
    },
    image: "lake",
  },
  {
    name: "Styria Wellness Hotel",
    location: "Bad Waltersdorf, Styria, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Wellness hotel in Styria with spa services and serene surroundings.",
    price: {
      min: 180,
      max: 350,
    },
    image: "countryside",
  },
  {
    name: "Mountain Escape",
    location: "Seefeld, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Beautiful mountain hotel in Seefeld with easy access to hiking and skiing.",
    price: {
      min: 170,
      max: 340,
    },
    image: "mountain",
  },
  {
    name: "Vienna Art Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Art-themed hotel in Vienna offering unique decor and a vibrant atmosphere.",
    price: {
      min: 190,
      max: 380,
    },
    image: "city",
  },
  {
    name: "Historic Salzburg Inn",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Charming historic inn in Salzburg with a warm and inviting ambiance.",
    price: {
      min: 150,
      max: 300,
    },
    image: "city",
  },
  {
    name: "Vienna Family Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Family-friendly hotel in Vienna with spacious rooms and a central location.",
    price: {
      min: 120,
      max: 240,
    },
    image: "city",
  },
  {
    name: "Mountain Resort",
    location: "Lech, Vorarlberg, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Luxury resort in the mountains of Lech with top-notch amenities and service.",
    price: {
      min: 300,
      max: 600,
    },
    image: "mountain",
  },
  {
    name: "Spa Hotel",
    location: "Bad Gastein, Salzburg, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Relaxing spa hotel in Bad Gastein offering therapeutic treatments and a serene environment.",
    price: {
      min: 180,
      max: 360,
    },
    image: "countryside",
  },
  {
    name: "Vienna Airport Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Convenient hotel near Vienna Airport with modern amenities and shuttle service.",
    price: {
      min: 110,
      max: 220,
    },
    image: "city",
  },
  {
    name: "Lakeside Retreat",
    location: "Wörthersee, Carinthia, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Beautiful retreat by Lake Wörthersee offering stunning views and water activities.",
    price: {
      min: 200,
      max: 400,
    },
    image: "lake",
  },
  {
    name: "Vienna Luxury Suites",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Opulent suites in Vienna with luxury furnishings and exceptional service.",
    price: {
      min: 350,
      max: 700,
    },
    image: "city",
  },
  {
    name: "Vienna Opera Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Luxurious hotel near Vienna Opera House with elegant rooms and fine dining.",
    price: {
      min: 320,
      max: 640,
    },
    image: "city",
  },
  {
    name: "Tyrol Alpine Resort",
    location: "Mayrhofen, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Alpine resort in Mayrhofen with ski-in/ski-out access and mountain views.",
    price: {
      min: 210,
      max: 420,
    },
    image: "mountain",
  },
  {
    name: "Lake Bliss Hotel",
    location: "Zell am See, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Scenic hotel by Lake Zell offering water activities and serene surroundings.",
    price: {
      min: 200,
      max: 400,
    },
    image: "lake",
  },
  {
    name: "Salzburg Music Hotel",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Cultural hotel in Salzburg celebrating the city's musical heritage.",
    price: {
      min: 180,
      max: 360,
    },
    image: "city",
  },
  {
    name: "Vienna City Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Convenient city hotel in Vienna with comfortable rooms and modern amenities.",
    price: {
      min: 130,
      max: 260,
    },
    image: "city",
  },
  {
    name: "Tyrolean Mountain Lodge",
    location: "Sölden, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Mountain lodge in Sölden with easy access to skiing and hiking trails.",
    price: {
      min: 190,
      max: 380,
    },
    image: "mountain",
  },
  {
    name: "Lakeside Paradise Hotel",
    location: "St. Wolfgang, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Beautiful hotel by Wolfgangsee offering picturesque views and relaxation.",
    price: {
      min: 200,
      max: 400,
    },
    image: "lake",
  },
  {
    name: "Vienna Comfort Suites",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Comfortable suites in Vienna with spacious rooms and convenient location.",
    price: {
      min: 140,
      max: 280,
    },
    image: "city",
  },
  {
    name: "Alpine Wellness Hotel",
    location: "Bad Hofgastein, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Wellness hotel in Bad Hofgastein offering spa services and alpine views.",
    price: {
      min: 180,
      max: 360,
    },
    image: "mountain",
  },
  {
    name: "Danube View Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Hotel with views of the Danube River, offering modern amenities and comfort.",
    price: {
      min: 120,
      max: 240,
    },
    image: "river",
  },
  {
    name: "Vienna Historic Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Historic hotel in the center of Vienna with elegant rooms and rich history.",
    price: {
      min: 200,
      max: 400,
    },
    image: "city",
  },
  {
    name: "Tyrol Adventure Lodge",
    location: "Ischgl, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Adventure lodge in Ischgl with easy access to outdoor sports and activities.",
    price: {
      min: 190,
      max: 380,
    },
    image: "mountain",
  },
  {
    name: "Vienna Royal Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Opulent hotel in Vienna offering royal treatment and luxurious rooms.",
    price: {
      min: 350,
      max: 700,
    },
    image: "city",
  },
  {
    name: "Graz Art Hotel",
    location: "Graz, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Art-inspired hotel in Graz with unique decor and vibrant atmosphere.",
    price: {
      min: 180,
      max: 360,
    },
    image: "city",
  },
  {
    name: "Alpine Serenity Hotel",
    location: "Lech, Vorarlberg, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Serene hotel in the Alps offering luxurious amenities and stunning views.",
    price: {
      min: 300,
      max: 600,
    },
    image: "mountain",
  },
  {
    name: "Vienna Central Inn",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Cozy inn in central Vienna with comfortable rooms and convenient location.",
    price: {
      min: 120,
      max: 240,
    },
    image: "city",
  },
  {
    name: "Tyrol Family Hotel",
    location: "Ellmau, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Family-friendly hotel in Tyrol offering spacious rooms and outdoor activities.",
    price: {
      min: 180,
      max: 360,
    },
    image: "mountain",
  },
  {
    name: "Lakeside Haven",
    location: "Millstatt, Carinthia, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Peaceful retreat by Lake Millstatt with beautiful views and relaxing atmosphere.",
    price: {
      min: 200,
      max: 400,
    },
    image: "lake",
  },
  {
    name: "Vienna Budget Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 2,
    description:
      "Affordable hotel in Vienna offering basic amenities and a central location.",
    price: {
      min: 80,
      max: 160,
    },
    image: "city",
  },
  {
    name: "Mountain Chalet",
    location: "Obergurgl, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Charming mountain chalet in Obergurgl with cozy rooms and scenic views.",
    price: {
      min: 190,
      max: 380,
    },
    image: "mountain",
  },
  {
    name: "Danube Delta Hotel",
    location: "Linz, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Comfortable hotel near the Danube River with scenic views and easy access to city attractions.",
    price: {
      min: 120,
      max: 240,
    },
    image: "river",
  },
  {
    name: "Austrian Alps Resort",
    location: "Schladming, Styria, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Ski-in/ski-out resort in the Austrian Alps offering luxurious accommodations and spa services.",
    price: {
      min: 250,
      max: 500,
    },
    image: "mountain",
  },
  {
    name: "Vienna Garden Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Tranquil hotel with a beautiful garden in Vienna offering peaceful surroundings and comfort.",
    price: {
      min: 130,
      max: 260,
    },
    image: "city",
  },
  {
    name: "Salzburg Riverside Inn",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Quaint inn by the Salzach River offering cozy rooms and a charming atmosphere.",
    price: {
      min: 110,
      max: 220,
    },
    image: "river",
  },
  {
    name: "Lakeview Lodge",
    location: "St. Gilgen, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Picturesque lodge overlooking Lake Wolfgang with comfortable accommodations and serene ambiance.",
    price: {
      min: 180,
      max: 360,
    },
    image: "lake",
  },
  {
    name: "Vienna Business Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Convenient hotel for business travelers in Vienna offering modern amenities and conference facilities.",
    price: {
      min: 140,
      max: 280,
    },
    image: "city",
  },
  {
    name: "Alpine Retreat",
    location: "Lech, Vorarlberg, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Luxurious retreat in the Austrian Alps offering upscale accommodations and stunning mountain views.",
    price: {
      min: 280,
      max: 560,
    },
    image: "mountain",
  },
  {
    name: "Graz Boutique Hotel",
    location: "Graz, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Chic boutique hotel in Graz with stylish decor and personalized service.",
    price: {
      min: 160,
      max: 320,
    },
    image: "city",
  },
  {
    name: "Austrian Countryside Resort",
    location: "St. Johann im Pongau, Salzburg, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Tranquil resort in the Austrian countryside offering relaxation and outdoor activities.",
    price: {
      min: 220,
      max: 440,
    },
    image: "countryside",
  },
  {
    name: "Vienna Urban Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Modern hotel in Vienna's urban center offering convenience and comfortable accommodations.",
    price: {
      min: 150,
      max: 300,
    },
    image: "city",
  },
  {
    name: "Austrian Lakeside Hotel",
    location: "Velden am Wörthersee, Carinthia, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Elegant lakeside hotel on Lake Wörthersee offering luxurious amenities and scenic views.",
    price: {
      min: 240,
      max: 480,
    },
    image: "lake",
  },
  {
    name: "Innsbruck Ski Hotel",
    location: "Innsbruck, Tyrol, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Cozy hotel in Innsbruck offering easy access to skiing and winter sports.",
    price: {
      min: 170,
      max: 340,
    },
    image: "mountain",
  },
  {
    name: "Vienna Parkside Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Peaceful hotel overlooking a park in Vienna offering tranquility and relaxation.",
    price: {
      min: 140,
      max: 280,
    },
    image: "city",
  },
  {
    name: "Alpine Adventure Hotel",
    location: "Hinterglemm, Salzburg, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Adventurous hotel in Hinterglemm offering outdoor activities and comfortable accommodations.",
    price: {
      min: 200,
      max: 400,
    },
    image: "mountain",
  },
  {
    name: "Vienna Garden Suites",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Spacious suites with a garden view in Vienna offering comfort and relaxation.",
    price: {
      min: 180,
      max: 360,
    },
    image: "city",
  },
  {
    name: "Austrian Riverfront Lodge",
    location: "Krems an der Donau, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Cozy lodge on the banks of the Danube River offering scenic views and a tranquil atmosphere.",
    price: {
      min: 120,
      max: 240,
    },
    image: "river",
  },
  {
    name: "Tyrolean Village Hotel",
    location: "Ellmau, Tyrol, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Quaint village hotel in Tyrol offering traditional charm and hospitality.",
    price: {
      min: 130,
      max: 260,
    },
    image: "mountain",
  },
  {
    name: "Vienna Cultural Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Culturally rich hotel in Vienna offering unique experiences and immersive ambiance.",
    price: {
      min: 190,
      max: 380,
    },
    image: "city",
  },
  {
    name: "Salzkammergut Lake Retreat",
    location: "Hallstatt, Upper Austria, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Secluded retreat in the Salzkammergut region offering stunning lake views and serene surroundings.",
    price: {
      min: 220,
      max: 440,
    },
    image: "lake",
  },
  {
    name: "Vienna Skyline Hotel",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Modern hotel with panoramic views of Vienna's skyline, offering luxury amenities and fine dining.",
    price: {
      min: 200,
      max: 400,
    },
    image: "cityscape",
  },
  {
    name: "Alpine Chalet Resort",
    location: "Kitzbühel, Tyrol, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Exclusive chalet resort in the heart of the Alps offering world-class skiing and luxurious accommodations.",
    price: {
      min: 400,
      max: 800,
    },
    image: "mountain",
  },
  {
    name: "Vienna Historic Palace",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Opulent palace hotel in Vienna's historic district offering lavish rooms, gourmet dining, and royal treatment.",
    price: {
      min: 500,
      max: 1000,
    },
    image: "palace",
  },
  {
    name: "Salzburg Castle Hotel",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Charming castle hotel overlooking Salzburg's old town, offering elegant rooms and medieval ambiance.",
    price: {
      min: 300,
      max: 600,
    },
    image: "castle",
  },
  {
    name: "Tyrolean Wellness Retreat",
    location: "Seefeld, Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Tranquil wellness retreat in the Tyrolean Alps offering spa treatments, gourmet cuisine, and mountain views.",
    price: {
      min: 300,
      max: 600,
    },
    image: "mountain",
  },
  {
    name: "Vienna Boutique Residence",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 5,
    description:
      "Intimate boutique residence in Vienna's cultural quarter offering personalized service and luxurious accommodations.",
    price: {
      min: 350,
      max: 700,
    },
    image: "city",
  },
  {
    name: "Wachau Vineyard Estate",
    location: "Dürnstein, Lower Austria, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Idyllic vineyard estate in the Wachau Valley offering wine tastings, gourmet dining, and panoramic views of the Danube.",
    price: {
      min: 280,
      max: 560,
    },
    image: "vineyard",
  },
  {
    name: "Innsbruck Alpine Lodge",
    location: "Innsbruck, Tyrol, Austria",
    country: "Austria",
    starRating: 3,
    description:
      "Cozy alpine lodge in Innsbruck offering rustic charm, mountain views, and easy access to outdoor activities.",
    price: {
      min: 180,
      max: 360,
    },
    image: "mountain",
  },
  {
    name: "Vienna Riverside Retreat",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 4,
    description:
      "Tranquil riverside retreat in Vienna offering spacious suites, riverside dining, and scenic views of the Danube.",
    price: {
      min: 250,
      max: 500,
    },
    image: "river",
  },
  {
    name: "Alpine Chalet in Tyrol",
    location: "Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description: "Alpine chalet in Tyrol offering cozy accommodations, mountain views, and access to skiing and hiking in this scenic region of western Austria.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "City Center Hotel in Vienna",
    location: "Vienna, Austria",
    country: "Austria",
    starRating: 4,
    description: "City center hotel in Vienna offering comfortable accommodations, historic charm, and a central location near museums and cultural landmarks.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Rural Retreat in Salzburg",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 3,
    description: "Rural retreat in Salzburg offering tranquil accommodations, countryside views, and a peaceful escape near lakes and historic sites.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Modern Apartment in Innsbruck",
    location: "Innsbruck, Austria",
    country: "Austria",
    starRating: 4,
    description: "Modern apartment in Innsbruck offering stylish accommodations, city views, and a central location near shopping districts and cultural attractions.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Castle Hotel in Styria",
    location: "Styria, Austria",
    country: "Austria",
    starRating: 5,
    description: "Castle hotel in Styria offering luxurious accommodations, castle views, and a regal atmosphere near historic landmarks and scenic countryside.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Lakefront Resort in Carinthia",
    location: "Carinthia, Austria",
    country: "Austria",
    starRating: 4,
    description: "Lakefront resort in Carinthia offering upscale accommodations, lake views, and access to water sports and scenic hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "Countryside Lodge in Vorarlberg",
    location: "Vorarlberg, Austria",
    country: "Austria",
    starRating: 3,
    description: "Countryside lodge in Vorarlberg offering rustic accommodations, pastoral views, and a tranquil escape near nature reserves and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Urban Hotel in Graz",
    location: "Graz, Austria",
    country: "Austria",
    starRating: 4,
    description: "Urban hotel in Graz offering comfortable accommodations, city center location, and a convenient base for business and leisure travelers.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Vineyard Estate in Burgenland",
    location: "Burgenland, Austria",
    country: "Austria",
    starRating: 4,
    description: "Vineyard estate in Burgenland offering charming accommodations, vineyard tours, and wine tastings in Austria's premier wine region.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Historic Inn in Hallstatt",
    location: "Hallstatt, Austria",
    country: "Austria",
    starRating: 3,
    description: "Historic inn in Hallstatt offering cozy accommodations, medieval charm, and a traditional stay near historic landmarks and scenic lakes.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Mountain Retreat in Vorarlberg",
    location: "Vorarlberg, Austria",
    country: "Austria",
    starRating: 4,
    description: "Mountain retreat in Vorarlberg offering alpine accommodations, panoramic views, and access to hiking trails and ski resorts.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "City Center Apartment in Salzburg",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 4,
    description: "City center apartment in Salzburg offering modern accommodations, historic charm, and a central location near Mozart's birthplace and old town.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Riverside Lodge in Tirol",
    location: "Tirol, Austria",
    country: "Austria",
    starRating: 3,
    description: "Riverside lodge in Tirol offering cozy accommodations, river views, and a peaceful retreat near scenic hiking trails and charming villages.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Urban Boutique Hotel in Linz",
    location: "Linz, Austria",
    country: "Austria",
    starRating: 4,
    description: "Urban boutique hotel in Linz offering stylish accommodations, city views, and a vibrant atmosphere near museums and cultural attractions.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Castle Resort in Lower Austria",
    location: "Lower Austria, Austria",
    country: "Austria",
    starRating: 5,
    description: "Castle resort in Lower Austria offering luxurious accommodations, castle views, and a regal atmosphere near historic landmarks and vineyards.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Lakefront Hotel in Carinthia",
    location: "Carinthia, Austria",
    country: "Austria",
    starRating: 4,
    description: "Lakefront hotel in Carinthia offering upscale accommodations, lake views, and access to water sports and scenic nature reserves.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "Countryside Retreat in Styria",
    location: "Styria, Austria",
    country: "Austria",
    starRating: 3,
    description: "Countryside retreat in Styria offering rustic accommodations, pastoral views, and a tranquil escape near vineyards and historic towns.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Modern Hotel in Graz",
    location: "Graz, Austria",
    country: "Austria",
    starRating: 4,
    description: "Modern hotel in Graz offering comfortable accommodations, city center location, and a convenient base for business and leisure travelers.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Vineyard Retreat in Burgenland",
    location: "Burgenland, Austria",
    country: "Austria",
    starRating: 4,
    description: "Vineyard retreat in Burgenland offering charming accommodations, vineyard tours, and wine tastings in Austria's premier wine region.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Historic Pension in Hallstatt",
    location: "Hallstatt, Austria",
    country: "Austria",
    starRating: 3,
    description: "Historic pension in Hallstatt offering cozy accommodations, medieval charm, and a traditional stay near historic landmarks and scenic lakes.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Ski Resort in Arlberg",
    location: "Arlberg, Austria",
    country: "Austria",
    starRating: 4,
    description: "Ski resort in Arlberg offering alpine accommodations, ski-in/ski-out access, and a winter wonderland for skiing and snowboarding enthusiasts.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Riverside Chalet in Salzkammergut",
    location: "Salzkammergut, Austria",
    country: "Austria",
    starRating: 4,
    description: "Riverside chalet in Salzkammergut offering cozy accommodations, river views, and a serene escape near picturesque lakes and hiking trails.",
    price: {
      min: 400,
      max: 800
    },
    image: "countryside"
  },
  {
    name: "Historic Manor in Burgenland",
    location: "Burgenland, Austria",
    country: "Austria",
    starRating: 5,
    description: "Historic manor in Burgenland offering luxurious accommodations, landscaped gardens, and a prestigious setting near historic palaces and vineyards.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Lakeview Hotel in Upper Austria",
    location: "Upper Austria, Austria",
    country: "Austria",
    starRating: 4,
    description: "Lakeview hotel in Upper Austria offering upscale accommodations, lake views, and access to water sports and scenic hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },

  {
    name: "Countryside Villa in Vorarlberg",
    location: "Vorarlberg, Austria",
    country: "Austria",
    starRating: 3,
    description: "Countryside villa in Vorarlberg offering rustic accommodations, pastoral views, and a tranquil escape near nature reserves and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Mountain Cabin in Salzburg",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 3,
    description: "Mountain cabin in Salzburg offering cozy accommodations, mountain views, and a rustic escape near hiking trails and scenic nature reserves.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Boutique Hotel in Innsbruck",
    location: "Innsbruck, Austria",
    country: "Austria",
    starRating: 4,
    description: "Boutique hotel in Innsbruck offering stylish accommodations, mountain views, and a central location near historic landmarks and outdoor activities.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Countryside Cottage in Carinthia",
    location: "Carinthia, Austria",
    country: "Austria",
    starRating: 3,
    description: "Countryside cottage in Carinthia offering charming accommodations, rural views, and a peaceful retreat near lakes and outdoor recreation areas.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "City Apartment in Graz",
    location: "Graz, Austria",
    country: "Austria",
    starRating: 4,
    description: "City apartment in Graz offering modern accommodations, city views, and a convenient location near shopping districts and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Riverside Lodge in Salzkammergut",
    location: "Salzkammergut, Austria",
    country: "Austria",
    starRating: 4,
    description: "Riverside lodge in Salzkammergut offering cozy accommodations, river views, and a serene escape near picturesque lakes and hiking trails.",
    price: {
      min: 400,
      max: 800
    },
    image: "countryside"
  },
  {
    name: "Historic Manor in Burgenland",
    location: "Burgenland, Austria",
    country: "Austria",
    starRating: 5,
    description: "Historic manor in Burgenland offering luxurious accommodations, landscaped gardens, and a prestigious setting near historic palaces and vineyards.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Lakeview Hotel in Upper Austria",
    location: "Upper Austria, Austria",
    country: "Austria",
    starRating: 4,
    description: "Lakeview hotel in Upper Austria offering upscale accommodations, lake views, and access to water sports and scenic hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "Urban Loft in Linz",
    location: "Linz, Austria",
    country: "Austria",
    starRating: 4,
    description: "Urban loft in Linz offering stylish accommodations, city views, and a vibrant atmosphere near museums and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Countryside Villa in Vorarlberg",
    location: "Vorarlberg, Austria",
    country: "Austria",
    starRating: 3,
    description: "Countryside villa in Vorarlberg offering rustic accommodations, pastoral views, and a tranquil escape near nature reserves and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Lakefront Resort in Carinthia",
    location: "Carinthia, Austria",
    country: "Austria",
    starRating: 4,
    description: "Lakefront resort in Carinthia offering upscale accommodations, lake views, and access to water sports and scenic hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "Mountain Retreat in Tyrol",
    location: "Tyrol, Austria",
    country: "Austria",
    starRating: 4,
    description: "Mountain retreat in Tyrol offering alpine accommodations, panoramic views, and access to hiking trails and ski resorts.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "City Center Apartment in Salzburg",
    location: "Salzburg, Austria",
    country: "Austria",
    starRating: 4,
    description: "City center apartment in Salzburg offering modern accommodations, historic charm, and a central location near Mozart's birthplace and old town.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Riverside Lodge in Tirol",
    location: "Tirol, Austria",
    country: "Austria",
    starRating: 3,
    description: "Riverside lodge in Tirol offering cozy accommodations, river views, and a peaceful retreat near scenic hiking trails and charming villages.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Urban Boutique Hotel in Linz",
    location: "Linz, Austria",
    country: "Austria",
    starRating: 4,
    description: "Urban boutique hotel in Linz offering stylish accommodations, city views, and a vibrant atmosphere near museums and cultural attractions.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Castle Resort in Lower Austria",
    location: "Lower Austria, Austria",
    country: "Austria",
    starRating: 5,
    description: "Castle resort in Lower Austria offering luxurious accommodations, castle views, and a regal atmosphere near historic landmarks and vineyards.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Countryside Retreat in Styria",
    location: "Styria, Austria",
    country: "Austria",
    starRating: 3,
    description: "Countryside retreat in Styria offering rustic accommodations, pastoral views, and a tranquil escape near vineyards and historic towns.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Modern Hotel in Graz",
    location: "Graz, Austria",
    country: "Austria",
    starRating: 4,
    description: "Modern hotel in Graz offering comfortable accommodations, city center location, and a convenient base for business and leisure travelers.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Vineyard Retreat in Burgenland",
    location: "Burgenland, Austria",
    country: "Austria",
    starRating: 4,
    description: "Vineyard retreat in Burgenland offering charming accommodations, vineyard tours, and wine tastings in Austria's premier wine region.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Historic Pension in Hallstatt",
    location: "Hallstatt, Austria",
    country: "Austria",
    starRating: 3,
    description: "Historic pension in Hallstatt offering cozy accommodations, medieval charm, and a traditional stay near historic landmarks and scenic lakes.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Ski Resort in Arlberg",
    location: "Arlberg, Austria",
    country: "Austria",
    starRating: 4,
    description: "Ski resort in Arlberg offering alpine accommodations, ski-in/ski-out access, and a winter wonderland for skiing and snowboarding enthusiasts.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Riverside Chalet in Salzkammergut",
    location: "Salzkammergut, Austria",
    country: "Austria",
    starRating: 4,
    description: "Riverside chalet in Salzkammergut offering cozy accommodations, river views, and a serene escape near picturesque lakes and hiking trails.",
    price: {
      min: 400,
      max: 800
    },
    image: "countryside"
  },
  {
    name: "Historic Manor in Burgenland",
    location: "Burgenland, Austria",
    country: "Austria",
    starRating: 5,
    description: "Historic manor in Burgenland offering luxurious accommodations, landscaped gardens, and a prestigious setting near historic palaces and vineyards.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Lakeview Hotel in Upper Austria",
    location: "Upper Austria, Austria",
    country: "Austria",
    starRating: 4,
    description: "Lakeview hotel in Upper Austria offering upscale accommodations, lake views, and access to water sports and scenic hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "Countryside Villa in Vorarlberg",
    location: "Vorarlberg, Austria",
    country: "Austria",
    starRating: 3,
    description: "Countryside villa in Vorarlberg offering rustic accommodations, pastoral views, and a tranquil escape near nature reserves and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  }


];
console.log(austriaHotels); 

// Germany
const germanyHotels = [
  {
    name: "Berlin City Center Hotel",
    location: "Berlin, Germany",
    country: "Germany",
    starRating: 4,
    description: "Modern hotel in the heart of Berlin offering stylish accommodations, gourmet dining, and easy access to city attractions.",
    price: {
      min: 150,
      max: 300
    },
    image: "city"
  },
  {
    name: "Bavarian Alps Resort",
    location: "Garmisch-Partenkirchen, Bavaria, Germany",
    country: "Germany",
    starRating: 5,
    description: "Luxury resort nestled in the Bavarian Alps offering world-class skiing, spa treatments, and panoramic mountain views.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Hamburg Harbor View Hotel",
    location: "Hamburg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Chic hotel overlooking Hamburg's harbor offering contemporary rooms, waterfront dining, and vibrant nightlife nearby.",
    price: {
      min: 200,
      max: 400
    },
    image: "waterfront"
  },
  {
    name: "Black Forest Lodge",
    location: "Baden-Baden, Baden-Württemberg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Quaint lodge in the Black Forest offering cozy rooms, forest hikes, and wellness treatments in natural hot springs.",
    price: {
      min: 180,
      max: 360
    },
    image: "forest"
  },
  {
    name: "Munich Beer Garden Hotel",
    location: "Munich, Bavaria, Germany",
    country: "Germany",
    starRating: 3,
    description: "Traditional hotel near Munich's beer gardens offering Bavarian hospitality, hearty cuisine, and easy access to Oktoberfest.",
    price: {
      min: 120,
      max: 240
    },
    image: "beer"
  },
  {
    name: "Cologne Riverside Inn",
    location: "Cologne, Germany",
    country: "Germany",
    starRating: 3,
    description: "Charming inn along the Rhine River in Cologne offering cozy rooms, riverside views, and proximity to city attractions.",
    price: {
      min: 100,
      max: 200
    },
    image: "river"
  },
  {
    name: "Frankfurt Business Hotel",
    location: "Frankfurt, Germany",
    country: "Germany",
    starRating: 4,
    description: "Contemporary hotel in Frankfurt's financial district offering modern amenities, business facilities, and city views.",
    price: {
      min: 180,
      max: 360
    },
    image: "financial"
  },
  {
    name: "Rhine Valley Vineyard Resort",
    location: "Rüdesheim am Rhein, Rhineland-Palatinate, Germany",
    country: "Germany",
    starRating: 4,
    description: "Idyllic resort in the Rhine Valley offering wine tastings, vineyard tours, and panoramic river views.",
    price: {
      min: 220,
      max: 440
    },
    image: "vineyard"
  },
  {
    name: "Dresden Historic Quarter Hotel",
    location: "Dresden, Germany",
    country: "Germany",
    starRating: 4,
    description: "Stately hotel in Dresden's historic quarter offering elegant rooms, gourmet dining, and cultural experiences.",
    price: {
      min: 200,
      max: 400
    },
    image: "historic-quarter"
  },
  {
    name: "Heidelberg Castle View Hotel",
    location: "Heidelberg, Baden-Württemberg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Charming hotel with views of Heidelberg Castle offering romantic rooms, gourmet dining, and historic ambiance.",
    price: {
      min: 180,
      max: 360
    },
    image: "castle"
  },
  {
    name: "Bremen Riverside Inn",
    location: "Bremen, Germany",
    country: "Germany",
    starRating: 3,
    description: "Quaint inn by the Weser River offering cozy rooms, riverside dining, and proximity to Bremen's attractions.",
    price: {
      min: 120,
      max: 240
    },
    image: "river"
  },
  {
    name: "Neuschwanstein Castle Retreat",
    location: "Schwangau, Bavaria, Germany",
    country: "Germany",
    starRating: 5,
    description: "Exclusive retreat near Neuschwanstein Castle offering luxurious suites, alpine views, and royal experiences.",
    price: {
      min: 500,
      max: 1000
    },
    image: "castle"
  },
  {
    name: "Hannover Expo Hotel",
    location: "Hannover, Germany",
    country: "Germany",
    starRating: 3,
    description: "Modern hotel near Hannover Messe offering convenient accommodations for business travelers and conference attendees.",
    price: {
      min: 140,
      max: 280
    },
    image: "expo"
  },
  {
    name: "Ruhr Valley Industrial Heritage Hotel",
    location: "Essen, North Rhine-Westphalia, Germany",
    country: "Germany",
    starRating: 4,
    description: "Historic hotel in the Ruhr Valley offering insights into Germany's industrial heritage, comfortable rooms, and regional cuisine.",
    price: {
      min: 160,
      max: 320
    },
    image: "industrial"
  },
  {
    name: "Baltic Sea Beach Resort",
    location: "Usedom, Mecklenburg-Vorpommern, Germany",
    country: "Germany",
    starRating: 4,
    description: "Seaside resort on the shores of the Baltic Sea offering sandy beaches, wellness facilities, and coastal charm.",
    price: {
      min: 180,
      max: 360
    },
    image: "beach"
  },
  {
    name: "Saxon Switzerland Nature Lodge",
    location: "Bad Schandau, Saxony, Germany",
    country: "Germany",
    starRating: 4,
    description: "Nature lodge in the heart of Saxon Switzerland National Park offering hiking trails, rock formations, and serene landscapes.",
    price: {
      min: 200,
      max: 400
    },
    image: "nature"
  },
  {
    name: "Düsseldorf Riverside Hotel",
    location: "Düsseldorf, Germany",
    country: "Germany",
    starRating: 4,
    description: "Riverside hotel in Düsseldorf offering stylish accommodations, riverside dining, and proximity to city attractions.",
    price: {
      min: 180,
      max: 360
    },
    image: "river"
  },
  {
    name: "Eagle's Nest Mountain Retreat",
    location: "Berchtesgaden, Bavaria, Germany",
    country: "Germany",
    starRating: 5,
    description: "Luxurious retreat near Eagle's Nest offering alpine views, gourmet dining, and exclusive experiences in the Bavarian Alps.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Hanover Lakeside Resort",
    location: "Hanover, Lower Saxony, Germany",
    country: "Germany",
    starRating: 4,
    description: "Lakeside resort in Hanover offering modern accommodations, water sports, and relaxation by the lake.",
    price: {
      min: 200,
      max: 400
    },
    image: "lake"
  },
  {
    name: "Leipzig Cultural Quarter Hotel",
    location: "Leipzig, Germany",
    country: "Germany",
    starRating: 4,
    description: "Artistic hotel in Leipzig's cultural quarter offering creative ambiance, eclectic rooms, and proximity to theaters and galleries.",
    price: {
      min: 180,
      max: 360
    },
    image: "culture"
  },
  {
    name: "Potsdam Palace Gardens Retreat",
    location: "Potsdam, Brandenburg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Tranquil retreat near Potsdam's palace gardens offering historic charm, lush landscapes, and relaxation.",
    price: {
      min: 220,
      max: 440
    },
    image: "palace"
  },
  {
    name: "Cologne Old Town Boutique Hotel",
    location: "Cologne, Germany",
    country: "Germany",
    starRating: 4,
    description: "Boutique hotel in Cologne's old town offering stylish rooms, cobblestone streets, and historic ambiance.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Thuringian Forest Retreat",
    location: "Oberhof, Thuringia, Germany",
    country: "Germany",
    starRating: 3,
    description: "Secluded retreat in the Thuringian Forest offering forest walks, wellness facilities, and tranquility.",
    price: {
      min: 150,
      max: 300
    },
    image: "forest"
  },
  {
    name: "Bremen Maritime Hotel",
    location: "Bremen, Germany",
    country: "Germany",
    starRating: 3,
    description: "Maritime-themed hotel in Bremen offering nautical decor, cozy rooms, and a lively port atmosphere.",
    price: {
      min: 120,
      max: 240
    },
    image: "maritime"
  },
  {
    name: "Rügen Island Seaside Resort",
    location: "Rügen, Mecklenburg-Vorpommern, Germany",
    country: "Germany",
    starRating: 4,
    description: "Seaside resort on the island of Rügen offering sandy beaches, spa treatments, and views of the Baltic Sea.",
    price: {
      min: 220,
      max: 440
    },
    image: "beach"
  },
  {
    name: "Wolfsburg Autostadt Hotel",
    location: "Wolfsburg, Lower Saxony, Germany",
    country: "Germany",
    starRating: 4,
    description: "Hotel in Wolfsburg's Autostadt offering automotive-themed rooms, factory tours, and museum visits.",
    price: {
      min: 180,
      max: 360
    },
    image: "automotive"
  },
  {
    name: "Nuremberg Castle View Hotel",
    location: "Nuremberg, Bavaria, Germany",
    country: "Germany",
    starRating: 4,
    description: "Hotel with views of Nuremberg Castle offering medieval charm, modern amenities, and proximity to city landmarks.",
    price: {
      min: 200,
      max: 400
    },
    image: "castle"
  },
  {
    name: "Baden-Baden Thermal Spa Resort",
    location: "Baden-Baden, Baden-Württemberg, Germany",
    country: "Germany",
    starRating: 5,
    description: "Thermal spa resort in Baden-Baden offering healing waters, wellness treatments, and luxurious accommodations.",
    price: {
      min: 400,
      max: 800
    },
    image: "spa"
  },
  {
    name: "Düsseldorf Fashion District Hotel",
    location: "Düsseldorf, Germany",
    country: "Germany",
    starRating: 4,
    description: "Fashionable hotel in Düsseldorf's fashion district offering trendy rooms, designer boutiques, and chic cafes.",
    price: {
      min: 180,
      max: 360
    },
    image: "fashion"
  },
  {
    name: "Spreewald Nature Retreat",
    location: "Lübbenau, Brandenburg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Nature retreat in the Spreewald region offering boat tours, cycling paths, and tranquility in the countryside.",
    price: {
      min: 200,
      max: 400
    },
    image: "nature"
  },
  {
    name: "Lake Constance Lakeside Resort",
    location: "Konstanz, Baden-Württemberg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Lakeside resort on Lake Constance offering water sports, lakeside dining, and panoramic views of the Alps.",
    price: {
      min: 220,
      max: 440
    },
    image: "lake"
  },
  {
    name: "Wiesbaden Spa Retreat",
    location: "Wiesbaden, Hesse, Germany",
    country: "Germany",
    starRating: 4,
    description: "Spa retreat in Wiesbaden offering thermal baths, wellness treatments, and relaxation in a historic spa town.",
    price: {
      min: 200,
      max: 400
    },
    image: "spa"
  },
  {
    name: "Cottbus Nature Lodge",
    location: "Cottbus, Brandenburg, Germany",
    country: "Germany",
    starRating: 3,
    description: "Nature lodge near Cottbus offering forest walks, birdwatching, and nature experiences in Lower Lusatia.",
    price: {
      min: 150,
      max: 300
    },
    image: "nature"
  },
  {
    name: "Karlsruhe Technology Park Hotel",
    location: "Karlsruhe, Baden-Württemberg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Hotel in Karlsruhe's technology park offering modern accommodations, business amenities, and proximity to tech companies.",
    price: {
      min: 180,
      max: 360
    },
    image: "technology"
  },
  {
    name: "Schwerin Castle View Hotel",
    location: "Schwerin, Mecklenburg-Vorpommern, Germany",
    country: "Germany",
    starRating: 4,
    description: "Hotel with views of Schwerin Castle offering regal charm, elegant rooms, and proximity to Lake Schwerin.",
    price: {
      min: 200,
      max: 400
    },
    image: "castle"
  },
  {
    name: "Erfurt Old Town Boutique Hotel",
    location: "Erfurt, Thuringia, Germany",
    country: "Germany",
    starRating: 4,
    description: "Boutique hotel in Erfurt's old town offering historic charm, stylish rooms, and artisanal shops.",
    price: {
      min: 180,
      max: 360
    },
    image: "old-town"
  },
  {
    name: "Bayreuth Festival Hotel",
    location: "Bayreuth, Bavaria, Germany",
    country: "Germany",
    starRating: 4,
    description: "Hotel in Bayreuth offering accommodations for visitors to the annual Bayreuth Festival, known for its Wagnerian operas.",
    price: {
      min: 200,
      max: 400
    },
    image: "festival"
  },
  {
    name: "Kiel Coastal Retreat",
    location: "Kiel, Schleswig-Holstein, Germany",
    country: "Germany",
    starRating: 3,
    description: "Coastal retreat in Kiel offering sea views, sailing trips, and relaxation on the Baltic Coast.",
    price: {
      min: 150,
      max: 300
    },
    image: "coast"
  },
  {
    name: "Saarbrücken Riverside Hotel",
    location: "Saarbrücken, Saarland, Germany",
    country: "Germany",
    starRating: 3,
    description: "Riverside hotel in Saarbrücken offering comfortable accommodations, riverside promenades, and proximity to city attractions.",
    price: {
      min: 120,
      max: 240
    },
    image: "river"
  },
  {
    name: "Göttingen University District Hotel",
    location: "Göttingen, Lower Saxony, Germany",
    country: "Germany",
    starRating: 3,
    description: "Hotel in Göttingen's university district offering accommodations for academics, students, and visitors to the university.",
    price: {
      min: 140,
      max: 280
    },
    image: "university"
  },
  {
    name: "Wuppertal Suspension Railway Hotel",
    location: "Wuppertal, North Rhine-Westphalia, Germany",
    country: "Germany",
    starRating: 3,
    description: "Hotel in Wuppertal offering views of the iconic suspension railway, comfortable accommodations, and easy access to city sights.",
    price: {
      min: 120,
      max: 240
    },
    image: "railway"
  },
  {
    name: "Hildesheim Historic Quarter Hotel",
    location: "Hildesheim, Lower Saxony, Germany",
    country: "Germany",
    starRating: 3,
    description: "Hotel in Hildesheim's historic quarter offering medieval charm, cobblestone streets, and proximity to UNESCO World Heritage sites.",
    price: {
      min: 140,
      max: 280
    },
    image: "historic-quarter"
  },
  {
    name: "Mülheim Ruhr Riverfront Hotel",
    location: "Mülheim an der Ruhr, North Rhine-Westphalia, Germany",
    country: "Germany",
    starRating: 3,
    description: "Riverfront hotel in Mülheim an der Ruhr offering comfortable accommodations, riverside walks, and proximity to city attractions.",
    price: {
      min: 120,
      max: 240
    },
    image: "river"
  },
  {
    name: "Osnabrück Old Town Inn",
    location: "Osnabrück, Lower Saxony, Germany",
    country: "Germany",
    starRating: 3,
    description: "Inn in Osnabrück's old town offering historic charm, cozy rooms, and traditional German hospitality.",
    price: {
      min: 120,
      max: 240
    },
    image: "old-town"
  },
  {
    name: "Garmisch-Partenkirchen Ski Resort",
    location: "Garmisch-Partenkirchen, Bavaria, Germany",
    country: "Germany",
    starRating: 4,
    description: "Ski resort in Garmisch-Partenkirchen offering winter sports, alpine views, and cozy accommodations near the Zugspitze.",
    price: {
      min: 250,
      max: 500
    },
    image: "ski"
  },
  {
    name: "Bavarian Chalet in the Alps",
    location: "Bavarian Alps, Germany",
    country: "Germany",
    starRating: 4,
    description: "Bavarian chalet in the Alps offering cozy accommodations, mountain views, and access to hiking trails and ski resorts.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Historic Hotel in Berlin",
    location: "Berlin, Germany",
    country: "Germany",
    starRating: 4,
    description: "Historic hotel in Berlin offering elegant accommodations, city views, and a central location near iconic landmarks and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Riverside Retreat in Black Forest",
    location: "Black Forest, Germany",
    country: "Germany",
    starRating: 3,
    description: "Riverside retreat in Black Forest offering tranquil accommodations, forest views, and a peaceful escape near hiking trails and charming villages.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Modern Apartment in Munich",
    location: "Munich, Germany",
    country: "Germany",
    starRating: 4,
    description: "Modern apartment in Munich offering stylish accommodations, city center location, and a vibrant atmosphere near beer gardens and cultural sites.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Castle Hotel in Rhine Valley",
    location: "Rhine Valley, Germany",
    country: "Germany",
    starRating: 5,
    description: "Castle hotel in Rhine Valley offering luxurious accommodations, river views, and a fairy-tale setting near medieval castles and vineyards.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Coastal Resort in Baltic Sea",
    location: "Baltic Sea, Germany",
    country: "Germany",
    starRating: 4,
    description: "Coastal resort in Baltic Sea offering upscale accommodations, beach views, and access to sandy shores and seaside promenades.",
    price: {
      min: 500,
      max: 1000
    },
    image: "coast"
  },
  {
    name: "Countryside Lodge in Bavaria",
    location: "Bavaria, Germany",
    country: "Germany",
    starRating: 3,
    description: "Countryside lodge in Bavaria offering rustic accommodations, pastoral views, and a tranquil retreat near scenic lakes and hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Modern Hotel in Frankfurt",
    location: "Frankfurt, Germany",
    country: "Germany",
    starRating: 4,
    description: "Modern hotel in Frankfurt offering comfortable accommodations, skyline views, and a convenient location near business districts and shopping areas.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Wine Country Inn in Moselle Valley",
    location: "Moselle Valley, Germany",
    country: "Germany",
    starRating: 4,
    description: "Wine country inn in Moselle Valley offering charming accommodations, vineyard views, and wine tastings in this picturesque wine region.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Historic Guesthouse in Rothenburg",
    location: "Rothenburg, Germany",
    country: "Germany",
    starRating: 3,
    description: "Historic guesthouse in Rothenburg offering cozy accommodations, medieval charm, and a unique stay in this well-preserved medieval town.",
    price: {
      min: 250,
      max: 500
    },
    image: "old-town"
  },
  {
    name: "Lakeside Resort in Bavaria",
    location: "Bavaria, Germany",
    country: "Germany",
    starRating: 4,
    description: "Lakeside resort in Bavaria offering upscale accommodations, lake views, and access to water sports and hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "Urban Loft in Hamburg",
    location: "Hamburg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Urban loft in Hamburg offering modern accommodations, harbor views, and a lively atmosphere near historic warehouses and trendy neighborhoods.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Chic Apartment in Cologne",
    location: "Cologne, Germany",
    country: "Germany",
    starRating: 4,
    description: "Chic apartment in Cologne offering stylish accommodations, cathedral views, and a central location near historic sites and vibrant nightlife.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Rural Farmstay in Eifel",
    location: "Eifel, Germany",
    country: "Germany",
    starRating: 3,
    description: "Rural farmstay in Eifel offering cozy accommodations, countryside views, and a peaceful retreat near hiking trails and natural parks.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Historic Manor in Saxony",
    location: "Saxony, Germany",
    country: "Germany",
    starRating: 5,
    description: "Historic manor in Saxony offering opulent accommodations, landscaped gardens, and a prestigious setting near historic palaces and cultural landmarks.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Mountain Retreat in Harz",
    location: "Harz, Germany",
    country: "Germany",
    starRating: 4,
    description: "Mountain retreat in Harz offering alpine accommodations, panoramic views, and access to hiking trails and historic towns.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Seaside Villa in North Sea",
    location: "North Sea, Germany",
    country: "Germany",
    starRating: 4,
    description: "Seaside villa in North Sea offering luxurious accommodations, sea views, and access to sandy beaches and coastal promenades.",
    price: {
      min: 600,
      max: 1200
    },
    image: "coast"
  },
  {
    name: "Boutique Hotel in Heidelberg",
    location: "Heidelberg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Boutique hotel in Heidelberg offering elegant accommodations, historic charm, and a romantic atmosphere near Heidelberg Castle and Old Town.",
    price: {
      min: 400,
      max: 800
    },
    image: "old-town"
  },
  {
    name: "Vineyard Retreat in Palatinate",
    location: "Palatinate, Germany",
    country: "Germany",
    starRating: 4,
    description: "Vineyard retreat in Palatinate offering charming accommodations, vineyard tours, and wine tastings in Germany's second-largest wine region.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Historic Pension in Thuringia",
    location: "Thuringia, Germany",
    country: "Germany",
    starRating: 3,
    description: "Historic pension in Thuringia offering cozy accommodations, medieval charm, and a traditional stay near historic towns and cultural sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Alpine Lodge in Allgäu",
    location: "Allgäu, Germany",
    country: "Germany",
    starRating: 4,
    description: "Alpine lodge in Allgäu offering cozy accommodations, mountain views, and access to skiing and hiking in this scenic region of southern Germany.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "City Center Hotel in Dresden",
    location: "Dresden, Germany",
    country: "Germany",
    starRating: 4,
    description: "City center hotel in Dresden offering comfortable accommodations, historic charm, and a central location near museums and cultural landmarks.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Rural Retreat in Franconia",
    location: "Franconia, Germany",
    country: "Germany",
    starRating: 3,
    description: "Rural retreat in Franconia offering tranquil accommodations, countryside views, and a peaceful escape near vineyards and historic towns.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Modern Apartment in Stuttgart",
    location: "Stuttgart, Germany",
    country: "Germany",
    starRating: 4,
    description: "Modern apartment in Stuttgart offering stylish accommodations, city views, and a central location near shopping districts and cultural attractions.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Castle Hotel in Hesse",
    location: "Hesse, Germany",
    country: "Germany",
    starRating: 5,
    description: "Castle hotel in Hesse offering luxurious accommodations, castle views, and a regal atmosphere near historic landmarks and scenic countryside.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Seaside Resort in Rügen",
    location: "Rügen, Germany",
    country: "Germany",
    starRating: 4,
    description: "Seaside resort in Rügen offering upscale accommodations, Baltic Sea views, and access to sandy beaches and coastal cliffs.",
    price: {
      min: 500,
      max: 1000
    },
    image: "coast"
  },
  {
    name: "Countryside Lodge in Swabia",
    location: "Swabia, Germany",
    country: "Germany",
    starRating: 3,
    description: "Countryside lodge in Swabia offering rustic accommodations, pastoral views, and a tranquil escape near nature reserves and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Urban Hotel in Hannover",
    location: "Hannover, Germany",
    country: "Germany",
    starRating: 4,
    description: "Urban hotel in Hannover offering comfortable accommodations, city center location, and a convenient base for business and leisure travelers.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Wine Estate in Baden-Württemberg",
    location: "Baden-Württemberg, Germany",
    country: "Germany",
    starRating: 4,
    description: "Wine estate in Baden-Württemberg offering charming accommodations, vineyard tours, and wine tastings in Germany's third-largest wine region.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Historic Inn in Würzburg",
    location: "Würzburg, Germany",
    country: "Germany",
    starRating: 3,
    description: "Historic inn in Würzburg offering cozy accommodations, medieval charm, and a traditional stay near historic landmarks and scenic vineyards.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  }
];
console.log(germanyHotels);
// France
const franceHotels = [
  {
    name: "Paris Eiffel Tower View Hotel",
    location: "Paris, France",
    country: "France",
    starRating: 5,
    description: "Luxury hotel with breathtaking views of the Eiffel Tower offering elegant accommodations, gourmet dining, and proximity to Parisian landmarks.",
    price: {
      min: 300,
      max: 600
    },
    image: "eiffel-tower"
  },
  {
    name: "French Riviera Beach Resort",
    location: "Nice, French Riviera, France",
    country: "France",
    starRating: 5,
    description: "Exclusive beach resort on the French Riviera offering Mediterranean luxury, private beaches, and vibrant nightlife.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Lyon Gastronomic Hotel",
    location: "Lyon, France",
    country: "France",
    starRating: 4,
    description: "Gastronomic hotel in Lyon offering Michelin-starred dining, wine tastings, and culinary experiences in the heart of French gastronomy.",
    price: {
      min: 250,
      max: 500
    },
    image: "gastronomy"
  },
  {
    name: "Château de Chambord Luxury Retreat",
    location: "Chambord, Centre-Val de Loire, France",
    country: "France",
    starRating: 5,
    description: "Opulent retreat near Château de Chambord offering regal accommodations, gourmet dining, and experiences in the Loire Valley.",
    price: {
      min: 600,
      max: 1200
    },
    image: "chateau"
  },
  {
    name: "Provence Countryside Villa",
    location: "Provence, France",
    country: "France",
    starRating: 4,
    description: "Idyllic countryside villa in Provence offering vineyard views, olive groves, and relaxation in the French countryside.",
    price: {
      min: 300,
      max: 600
    },
    image: "countryside"
  },
  {
    name: "Mont Saint-Michel Abbey Retreat",
    location: "Mont Saint-Michel, Normandy, France",
    country: "France",
    starRating: 4,
    description: "Tranquil retreat near Mont Saint-Michel offering views of the abbey, medieval charm, and coastal walks in Normandy.",
    price: {
      min: 250,
      max: 500
    },
    image: "abbey"
  },
  {
    name: "Bordeaux Wine Country Estate",
    location: "Bordeaux, France",
    country: "France",
    starRating: 4,
    description: "Wine country estate in Bordeaux offering vineyard tours, wine tastings, and luxurious accommodations in the heart of wine country.",
    price: {
      min: 350,
      max: 700
    },
    image: "vineyard"
  },
  {
    name: "Côte d'Azur Cliffside Retreat",
    location: "Côte d'Azur, France",
    country: "France",
    starRating: 4,
    description: "Cliffside retreat on the Côte d'Azur offering panoramic sea views, private terraces, and Mediterranean elegance.",
    price: {
      min: 400,
      max: 800
    },
    image: "cliff"
  },
  {
    name: "Strasbourg Old Town Boutique Hotel",
    location: "Strasbourg, France",
    country: "France",
    starRating: 4,
    description: "Boutique hotel in Strasbourg's old town offering historic charm, Alsatian cuisine, and proximity to the city's landmarks.",
    price: {
      min: 250,
      max: 500
    },
    image: "old-town"
  },
  {
    name: "Normandy Coastal Inn",
    location: "Normandy, France",
    country: "France",
    starRating: 3,
    description: "Cozy inn on the Normandy coast offering sea views, coastal walks, and relaxation by the English Channel.",
    price: {
      min: 150,
      max: 300
    },
    image: "coast"
  },
  {
    name: "Marseille Harbor View Hotel",
    location: "Marseille, France",
    country: "France",
    starRating: 4,
    description: "Harbor view hotel in Marseille offering Mediterranean charm, seafood dining, and proximity to the Old Port.",
    price: {
      min: 200,
      max: 400
    },
    image: "harbor"
  },
  {
    name: "Paris City Centre Hotel",
    location: "Paris, France",
    country: "France",
    starRating: 4,
    description: "Centrally located hotel in Paris offering comfortable accommodations, city views, and easy access to attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "French Riviera Beachfront Resort",
    location: "Nice, French Riviera, France",
    country: "France",
    starRating: 5,
    description: "Beachfront resort on the French Riviera offering luxury accommodations, sea views, and beach access.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Provence Countryside Retreat",
    location: "Provence, France",
    country: "France",
    starRating: 4,
    description: "Countryside retreat in Provence offering peaceful surroundings, vineyard views, and relaxation.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Château in Loire Valley",
    location: "Loire Valley, France",
    country: "France",
    starRating: 5,
    description: "Château hotel in the Loire Valley offering luxurious accommodations, historic charm, and castle views.",
    price: {
      min: 500,
      max: 1000
    },
    image: "chateau"
  },
  {
    name: "Montpellier Historic District Hotel",
    location: "Montpellier, France",
    country: "France",
    starRating: 4,
    description: "Hotel in Montpellier's historic district offering characterful accommodations, cobblestone streets, and cultural experiences.",
    price: {
      min: 200,
      max: 400
    },
    image: "historic-district"
  },
  {
    name: "Biarritz Ocean View Hotel",
    location: "Biarritz, French Basque Country, France",
    country: "France",
    starRating: 4,
    description: "Hotel in Biarritz offering ocean views, coastal walks, and surf culture.",
    price: {
      min: 300,
      max: 600
    },
    image: "ocean"
  },
  {
    name: "Normandy Seaside Inn",
    location: "Normandy, France",
    country: "France",
    starRating: 3,
    description: "Seaside inn in Normandy offering cozy accommodations, sea breezes, and coastal charm.",
    price: {
      min: 150,
      max: 300
    },
    image: "coast"
  },
  {
    name: "Toulouse City Break Hotel",
    location: "Toulouse, France",
    country: "France",
    starRating: 4,
    description: "City break hotel in Toulouse offering modern accommodations, city views, and proximity to attractions.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Alsace Wine Country Retreat",
    location: "Alsace, France",
    country: "France",
    starRating: 4,
    description: "Wine country retreat in Alsace offering vineyard walks, wine tastings, and picturesque villages.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Nice Old Town Boutique Hotel",
    location: "Nice, French Riviera, France",
    country: "France",
    starRating: 4,
    description: "Boutique hotel in Nice's old town offering stylish accommodations, narrow streets, and Mediterranean vibes.",
    price: {
      min: 300,
      max: 600
    },
    image: "old-town"
  },
  {
    name: "Marseille Portside Hotel",
    location: "Marseille, France",
    country: "France",
    starRating: 3,
    description: "Portside hotel in Marseille offering harbor views, seafood dining, and maritime charm.",
    price: {
      min: 200,
      max: 400
    },
    image: "harbor"
  },
  {
    name: "Strasbourg Riverside Retreat",
    location: "Strasbourg, France",
    country: "France",
    starRating: 4,
    description: "Riverside retreat in Strasbourg offering tranquil accommodations, river walks, and Alsatian cuisine.",
    price: {
      min: 250,
      max: 500
    },
    image: "river"
  },
  {
    name: "Côte d'Azur Coastal Resort",
    location: "Côte d'Azur, France",
    country: "France",
    starRating: 5,
    description: "Coastal resort on the Côte d'Azur offering luxury accommodations, sea views, and Mediterranean relaxation.",
    price: {
      min: 500,
      max: 1000
    },
    image: "coast"
  },
  {
    name: "Bordeaux Wine Country Manor",
    location: "Bordeaux, France",
    country: "France",
    starRating: 4,
    description: "Wine country manor in Bordeaux offering vineyard views, wine tastings, and elegant accommodations.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Annecy Lakeside Retreat",
    location: "Annecy, France",
    country: "France",
    starRating: 4,
    description: "Lakeside retreat in Annecy offering alpine views, water activities, and relaxation by the lake.",
    price: {
      min: 300,
      max: 600
    },
    image: "lake"
  },
  {
    name: "Provence Hilltop Villa",
    location: "Provence, France",
    country: "France",
    starRating: 4,
    description: "Hilltop villa in Provence offering panoramic views, olive groves, and tranquility in the countryside.",
    price: {
      min: 350,
      max: 700
    },
    image: "hilltop"
  },
  {
    name: "Lyon Presqu'île District Hotel",
    location: "Lyon, France",
    country: "France",
    starRating: 4,
    description: "Hotel in Lyon's Presqu'île district offering stylish accommodations, gastronomic delights, and city exploration.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Normandy Coastal Cottage",
    location: "Normandy, France",
    country: "France",
    starRating: 3,
    description: "Coastal cottage in Normandy offering cozy accommodations, sea views, and coastal walks.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Toulouse Canal du Midi Retreat",
    location: "Toulouse, France",
    country: "France",
    starRating: 4,
    description: "Retreat along the Canal du Midi in Toulouse offering waterfront views, cycling paths, and city relaxation.",
    price: {
      min: 250,
      max: 500
    },
    image: "canal"
  },
  {
    name: "Cannes Promenade des Anglais Hotel",
    location: "Cannes, French Riviera, France",
    country: "France",
    starRating: 4,
    description: "Hotel along the Promenade des Anglais in Cannes offering elegant accommodations, sea breezes, and coastal charm.",
    price: {
      min: 300,
      max: 600
    },
    image: "promenade"
  },
  {
    name: "Dordogne Valley Manor",
    location: "Dordogne, France",
    country: "France",
    starRating: 4,
    description: "Manor house in the Dordogne Valley offering rural elegance, river views, and access to the region's historic sites.",
    price: {
      min: 350,
      max: 700
    },
    image: "valley"
  },
  {
    name: "Nice Portside Boutique Hotel",
    location: "Nice, French Riviera, France",
    country: "France",
    starRating: 4,
    description: "Boutique hotel in Nice's port offering stylish accommodations, maritime ambiance, and proximity to the Old Town.",
    price: {
      min: 300,
      max: 600
    },
    image: "port"
  },
  {
    name: "Biarritz Clifftop Resort",
    location: "Biarritz, French Basque Country, France",
    country: "France",
    starRating: 4,
    description: "Clifftop resort in Biarritz offering panoramic views, coastal walks, and relaxation on the Basque coast.",
    price: {
      min: 400,
      max: 800
    },
    image: "cliff"
  },
  {
    name: "Marseille Vieux Port Hotel",
    location: "Marseille, France",
    country: "France",
    starRating: 3,
    description: "Hotel overlooking Marseille's Vieux Port offering harbor views, seafood dining, and proximity to the city's attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "port"
  },
  {
    name: "Avignon Papal Palace District Hotel",
    location: "Avignon, France",
    country: "France",
    starRating: 4,
    description: "Hotel in Avignon's Papal Palace district offering historic charm, Provençal cuisine, and cultural experiences.",
    price: {
      min: 250,
      max: 500
    },
    image: "palace"
  },
  {
    name: "Brittany Coastal Retreat",
    location: "Brittany, France",
    country: "France",
    starRating: 3,
    description: "Coastal retreat in Brittany offering sea views, coastal walks, and relaxation on the Atlantic coast.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Alsace Countryside Inn",
    location: "Alsace, France",
    country: "France",
    starRating: 3,
    description: "Countryside inn in Alsace offering vineyard views, Alsatian cuisine, and a charming rural escape.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Dijon City Break Hotel",
    location: "Dijon, France",
    country: "France",
    starRating: 3,
    description: "City break hotel in Dijon offering comfortable accommodations, gastronomic delights, and proximity to the city's attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Bordeaux Riverside Hotel",
    location: "Bordeaux, France",
    country: "France",
    starRating: 4,
    description: "Riverside hotel in Bordeaux offering scenic views, wine tastings, and relaxation on the Garonne River.",
    price: {
      min: 300,
      max: 600
    },
    image: "river"
  },
  {
    name: "Nice Mediterranean Retreat",
    location: "Nice, French Riviera, France",
    country: "France",
    starRating: 4,
    description: "Mediterranean retreat in Nice offering sea views, coastal walks, and relaxation on the French Riviera.",
    price: {
      min: 350,
      max: 700
    },
    image: "mediterranean"
  },
  {
    name: "Provence Olive Grove Villa",
    location: "Provence, France",
    country: "France",
    starRating: 4,
    description: "Villa in Provence's olive groves offering tranquility, countryside views, and relaxation amidst nature.",
    price: {
      min: 300,
      max: 600
    },
    image: "olive-grove"
  },
  {
    name: "Lyon Silk District Hotel",
    location: "Lyon, France",
    country: "France",
    starRating: 4,
    description: "Hotel in Lyon's silk district offering comfortable accommodations, historic charm, and proximity to the city's silk heritage.",
    price: {
      min: 250,
      max: 500
    },
    image: "district"
  },
  {
    name: "Normandy Coastal Cottage",
    location: "Normandy, France",
    country: "France",
    starRating: 3,
    description: "Coastal cottage in Normandy offering cozy accommodations, sea views, and coastal walks.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Marseille Old Port Hotel",
    location: "Marseille, France",
    country: "France",
    starRating: 3,
    description: "Hotel overlooking Marseille's Old Port offering harbor views, seafood dining, and proximity to historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "port"
  },
  {
    name: "Toulouse Riverside Retreat",
    location: "Toulouse, France",
    country: "France",
    starRating: 4,
    description: "Riverside retreat in Toulouse offering scenic views, canal walks, and relaxation along the Garonne River.",
    price: {
      min: 300,
      max: 600
    },
    image: "river"
  },
  {
    name: "Côte d'Azur Luxury Villa",
    location: "Côte d'Azur, France",
    country: "France",
    starRating: 5,
    description: "Luxury villa on the Côte d'Azur offering opulent accommodations, infinity pool, and panoramic sea views.",
    price: {
      min: 700,
      max: 1500
    },
    image: "villa"
  },
  {
    name: "Biarritz Coastal Retreat",
    location: "Biarritz, French Basque Country, France",
    country: "France",
    starRating: 4,
    description: "Coastal retreat in Biarritz offering sea views, surfing opportunities, and relaxation on the Basque coast.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Lille Historic Quarter Hotel",
    location: "Lille, France",
    country: "France",
    starRating: 4,
    description: "Hotel in Lille's historic quarter offering characterful accommodations, cobblestone streets, and proximity to cultural sites.",
    price: {
      min: 300,
      max: 600
    },
    image: "historic-quarter"
  },
  {
    name: "Alsace Forest Lodge",
    location: "Alsace, France",
    country: "France",
    starRating: 3,
    description: "Forest lodge in Alsace offering tranquil accommodations, woodland walks, and relaxation amidst nature.",
    price: {
      min: 200,
      max: 400
    },
    image: "forest"
  },
  {
    name: "Strasbourg Alsatian Quarter Hotel",
    location: "Strasbourg, France",
    country: "France",
    starRating: 4,
    description: "Hotel in Strasbourg's Alsatian quarter offering charming accommodations, half-timbered houses, and proximity to cultural attractions.",
    price: {
      min: 250,
      max: 500
    },
    image: "quarter"
  },
  {
    name: "Cannes Riviera Hotel",
    location: "Cannes, French Riviera, France",
    country: "France",
    starRating: 4,
    description: "Hotel on the Riviera offering stylish accommodations, Mediterranean cuisine, and relaxation on the French coast.",
    price: {
      min: 300,
      max: 600
    },
    image: "riviera"
  },
  {
    name: "Marseille Calanques Retreat",
    location: "Marseille, France",
    country: "France",
    starRating: 4,
    description: "Retreat near Marseille's Calanques offering coastal walks, Mediterranean views, and relaxation in natural surroundings.",
    price: {
      min: 350,
      max: 700
    },
    image: "calanques"
  },
  {
    name: "Nice Promenade des Anglais Hotel",
    location: "Nice, French Riviera, France",
    country: "France",
    starRating: 4,
    description: "Hotel along the Promenade des Anglais in Nice offering elegant accommodations, sea breezes, and Mediterranean charm.",
    price: {
      min: 300,
      max: 600
    },
    image: "promenade"
  },
  {
    name: "Corsica Mountain Retreat",
    location: "Corsica, France",
    country: "France",
    starRating: 3,
    description: "Mountain retreat in Corsica offering alpine scenery, hiking trails, and relaxation amidst nature.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "French Alps Ski Lodge",
    location: "French Alps, France",
    country: "France",
    starRating: 4,
    description: "Ski lodge in the French Alps offering alpine charm, winter sports, and cozy accommodations near the slopes.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Château Retreat in Loire Valley",
    location: "Loire Valley, France",
    country: "France",
    starRating: 5,
    description: "Château retreat in Loire Valley offering luxurious accommodations, French gardens, and a historic setting near renowned castles and vineyards.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Parisian Boutique Hotel",
    location: "Paris, France",
    country: "France",
    starRating: 4,
    description: "Parisian boutique hotel offering stylish accommodations, chic décor, and a central location near iconic landmarks such as the Eiffel Tower and Louvre Museum.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Coastal Villa in French Riviera",
    location: "French Riviera, France",
    country: "France",
    starRating: 4,
    description: "Coastal villa in French Riviera offering elegant accommodations, Mediterranean views, and access to glamorous beaches and waterfront promenades.",
    price: {
      min: 600,
      max: 1200
    },
    image: "coast"
  },
  {
    name: "Mountain Chalet in French Alps",
    location: "French Alps, France",
    country: "France",
    starRating: 4,
    description: "Mountain chalet in French Alps offering cozy accommodations, alpine vistas, and access to world-class skiing and snowboarding.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Rustic Farmhouse in Provence",
    location: "Provence, France",
    country: "France",
    starRating: 3,
    description: "Rustic farmhouse in Provence offering authentic accommodations, lavender fields, and a tranquil escape in the heart of southern France.",
    price: {
      min: 300,
      max: 600
    },
    image: "countryside"
  },
  {
    name: "Seaside Resort in Normandy",
    location: "Normandy, France",
    country: "France",
    starRating: 4,
    description: "Seaside resort in Normandy offering refined accommodations, historic charm, and access to D-Day beaches and scenic coastal drives.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Vineyard Estate in Bordeaux",
    location: "Bordeaux, France",
    country: "France",
    starRating: 4,
    description: "Vineyard estate in Bordeaux offering boutique accommodations, wine tastings, and panoramic views of rolling vineyards.",
    price: {
      min: 500,
      max: 1000
    },
    image: "vineyard"
  },
  {
    name: "City Centre Apartment in Lyon",
    location: "Lyon, France",
    country: "France",
    starRating: 3,
    description: "City centre apartment in Lyon offering comfortable accommodations, gastronomic delights, and a vibrant setting near historic landmarks and markets.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Historic Manor in Burgundy",
    location: "Burgundy, France",
    country: "France",
    starRating: 5,
    description: "Historic manor in Burgundy offering opulent accommodations, grand salons, and a prestigious address amidst vineyards and medieval towns.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Charming B&B in Brittany",
    location: "Brittany, France",
    country: "France",
    starRating: 3,
    description: "Charming bed and breakfast in Brittany offering cozy accommodations, coastal walks, and a warm welcome in this scenic region of France.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Riverside Cottage in Dordogne",
    location: "Dordogne, France",
    country: "France",
    starRating: 3,
    description: "Riverside cottage in Dordogne offering quaint accommodations, scenic river views, and a peaceful retreat near medieval castles and picturesque villages.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Secluded Chalet in Vosges",
    location: "Vosges, France",
    country: "France",
    starRating: 3,
    description: "Secluded chalet in Vosges offering cozy accommodations, forest views, and a tranquil escape in this pristine natural setting.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Luxury Hotel in Cannes",
    location: "Cannes, France",
    country: "France",
    starRating: 5,
    description: "Luxury hotel in Cannes offering lavish accommodations, Mediterranean vistas, and a glamorous atmosphere near Cannes Film Festival venues.",
    price: {
      min: 800,
      max: 1500
    },
    image: "coast"
  },
  {
    name: "Rustic Gîte in Auvergne",
    location: "Auvergne, France",
    country: "France",
    starRating: 3,
    description: "Rustic gîte in Auvergne offering authentic accommodations, volcanic landscapes, and a peaceful retreat in the heart of central France.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Boutique Hotel in Bordeaux",
    location: "Bordeaux, France",
    country: "France",
    starRating: 4,
    description: "Boutique hotel in Bordeaux offering stylish accommodations, wine tastings, and a sophisticated atmosphere in the heart of wine country.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Pyrenees",
    location: "Pyrenees, France",
    country: "France",
    starRating: 4,
    description: "Mountain retreat in Pyrenees offering alpine accommodations, scenic hikes, and a serene escape amidst majestic peaks and valleys.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Chic Apartment in Nice",
    location: "Nice, France",
    country: "France",
    starRating: 4,
    description: "Chic apartment in Nice offering modern accommodations, Mediterranean views, and a vibrant setting near beaches and Promenade des Anglais.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Rural Farmstay in Normandy",
    location: "Normandy, France",
    country: "France",
    starRating: 3,
    description: "Rural farmstay in Normandy offering comfortable accommodations, countryside vistas, and a peaceful retreat near historic sites and apple orchards.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Renaissance Château in Brittany",
    location: "Brittany, France",
    country: "France",
    starRating: 5,
    description: "Renaissance château in Brittany offering opulent accommodations, landscaped gardens, and a fairy-tale setting near scenic coastlines and medieval towns.",
    price: {
      min: 800,
      max: 1500
    },
    image: "countryside"
  },
  {
    name: "Urban Loft in Marseille",
    location: "Marseille, France",
    country: "France",
    starRating: 4,
    description: "Urban loft in Marseille offering contemporary accommodations, harbor views, and a cosmopolitan vibe near historic landmarks and vibrant markets.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Seaside Resort in Biarritz",
    location: "Biarritz, France",
    country: "France",
    starRating: 4,
    description: "Seaside resort in Biarritz offering refined accommodations, Atlantic Ocean views, and a relaxed atmosphere near surf beaches and golf courses.",
    price: {
      min: 500,
      max: 1000
    },
    image: "coast"
  },
  {
    name: "Quaint Cottage in Normandy",
    location: "Normandy, France",
    country: "France",
    starRating: 3,
    description: "Quaint cottage in Normandy offering cozy accommodations, countryside charm, and a peaceful retreat near historic sites and apple orchards.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Urban Apartment in Bordeaux",
    location: "Bordeaux, France",
    country: "France",
    starRating: 4,
    description: "Urban apartment in Bordeaux offering modern accommodations, city views, and a vibrant setting near historic landmarks and renowned wineries.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Charming Guesthouse in Provence",
    location: "Provence, France",
    country: "France",
    starRating: 3,
    description: "Charming guesthouse in Provence offering comfortable accommodations, lavender fields, and a warm welcome in this scenic region of southern France.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Boutique Hotel in Lille",
    location: "Lille, France",
    country: "France",
    starRating: 4,
    description: "Boutique hotel in Lille offering stylish accommodations, city center location, and a chic atmosphere near historic squares and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Riverside Retreat in Dordogne",
    location: "Dordogne, France",
    country: "France",
    starRating: 3,
    description: "Riverside retreat in Dordogne offering scenic accommodations, tranquil river views, and a serene escape near medieval castles and charming villages.",
    price: {
      min: 300,
      max: 600
    },
    image: "countryside"
  },
  {
    name: "Luxury Villa in Saint-Tropez",
    location: "Saint-Tropez, France",
    country: "France",
    starRating: 5,
    description: "Luxury villa in Saint-Tropez offering opulent accommodations, private pool, and Mediterranean vistas in this exclusive resort destination.",
    price: {
      min: 800,
      max: 1500
    },
    image: "coast"
  },
  {
    name: "Mountain Lodge in Pyrenees",
    location: "Pyrenees, France",
    country: "France",
    starRating: 4,
    description: "Mountain lodge in Pyrenees offering alpine accommodations, breathtaking views, and access to hiking trails and ski slopes.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Art Deco Hotel in Nice",
    location: "Nice, France",
    country: "France",
    starRating: 4,
    description: "Art Deco hotel in Nice offering elegant accommodations, Promenade des Anglais views, and a central location near beaches and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Rural Farmhouse in Brittany",
    location: "Brittany, France",
    country: "France",
    starRating: 3,
    description: "Rural farmhouse in Brittany offering authentic accommodations, pastoral views, and a peaceful escape near coastal cliffs and charming villages.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  }
];
console.log(franceHotels);

// Italy
const italyHotels = [
  {
    name: "Rome City Centre Hotel",
    location: "Rome, Italy",
    country: "Italy",
    starRating: 4,
    description: "Centrally located hotel in Rome offering comfortable accommodations, city views, and easy access to historic landmarks.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Amalfi Coast Cliffside Retreat",
    location: "Amalfi Coast, Italy",
    country: "Italy",
    starRating: 5,
    description: "Cliffside retreat on the Amalfi Coast offering stunning views, luxury accommodations, and Mediterranean relaxation.",
    price: {
      min: 500,
      max: 1000
    },
    image: "coast"
  },
  {
    name: "Tuscany Vineyard Villa",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 4,
    description: "Villa in the Tuscan countryside offering vineyard views, wine tastings, and relaxation amidst rolling hills.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Venice Canal View Hotel",
    location: "Venice, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel overlooking the canals of Venice offering romantic accommodations, gondola rides, and proximity to St. Mark's Square.",
    price: {
      min: 300,
      max: 600
    },
    image: "canal"
  },
  {
    name: "Luxury Resort in Lake Como",
    location: "Lake Como, Italy",
    country: "Italy",
    starRating: 5,
    description: "Luxury resort in Lake Como offering opulent accommodations, private gardens, and breathtaking views of the lake and surrounding mountains.",
    price: {
      min: 800,
      max: 1500
    },
    image: "mountain-lake"
  },
  {
    name: "Historic Palazzo in Florence",
    location: "Florence, Italy",
    country: "Italy",
    starRating: 5,
    description: "Historic palazzo in Florence offering lavish accommodations, Renaissance architecture, and a prestigious address near Ponte Vecchio.",
    price: {
      min: 600,
      max: 1200
    },
    image: "old-town"
  },
  {
    name: "Seaside B&B in Puglia",
    location: "Puglia, Italy",
    country: "Italy",
    starRating: 3,
    description: "Seaside bed and breakfast in Puglia offering cozy accommodations, Mediterranean cuisine, and access to sandy beaches and historic towns.",
    price: {
      min: 150,
      max: 300
    },
    image: "beach"
  },
  {
    name: "Rural Farmhouse in Sicily",
    location: "Sicily, Italy",
    country: "Italy",
    starRating: 3,
    description: "Rural farmhouse in Sicily offering authentic accommodations, olive groves, and a tranquil escape amidst the island's landscapes.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "City View Loft in Milan",
    location: "Milan, Italy",
    country: "Italy",
    starRating: 4,
    description: "City view loft in Milan offering modern accommodations, skyline vistas, and proximity to fashion boutiques, museums, and nightlife.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Villa with Pool in Tuscany",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 4,
    description: "Villa with private pool in Tuscany offering spacious accommodations, vineyard views, and a serene retreat in the heart of wine country.",
    price: {
      min: 500,
      max: 1000
    },
    image: "countryside"
  },
  {
    name: "Boutique Guesthouse in Venice",
    location: "Venice, Italy",
    country: "Italy",
    starRating: 3,
    description: "Boutique guesthouse in Venice offering charming accommodations, canal views, and a romantic setting near hidden gems and local eateries.",
    price: {
      min: 250,
      max: 500
    },
    image: "canal"
  },
  {
    name: "Coastal Retreat in Positano",
    location: "Positano, Italy",
    country: "Italy",
    starRating: 4,
    description: "Coastal retreat in Positano offering boutique accommodations, cliffside views, and access to the Amalfi Coast's iconic beaches and villages.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Mountain Lodge in Abruzzo",
    location: "Abruzzo, Italy",
    country: "Italy",
    starRating: 3,
    description: "Mountain lodge in Abruzzo offering cozy accommodations, Apennine views, and a peaceful setting near national parks and medieval towns.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Secluded Villa in Sardinia",
    location: "Sardinia, Italy",
    country: "Italy",
    starRating: 4,
    description: "Secluded villa in Sardinia offering private accommodations, panoramic sea views, and access to pristine beaches and turquoise waters.",
    price: {
      min: 600,
      max: 1200
    },
    image: "beach"
  },
  {
    name: "Urban Apartment in Naples",
    location: "Naples, Italy",
    country: "Italy",
    starRating: 3,
    description: "Urban apartment in Naples offering comfortable accommodations, city views, and proximity to historic landmarks and authentic pizzerias.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Hilltop Retreat in Umbria",
    location: "Umbria, Italy",
    country: "Italy",
    starRating: 3,
    description: "Hilltop retreat in Umbria offering rustic accommodations, countryside panoramas, and a serene escape in the heart of Italy.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Riverside Villa in Tuscany",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 4,
    description: "Riverside villa in Tuscany offering elegant accommodations, Tuscan vistas, and a tranquil setting near vineyards and medieval towns.",
    price: {
      min: 400,
      max: 800
    },
    image: "countryside"
  },
  {
    name: "Historic Mansion in Florence",
    location: "Florence, Italy",
    country: "Italy",
    starRating: 5,
    description: "Historic mansion in Florence offering luxurious accommodations, Renaissance grandeur, and a prestigious address near iconic landmarks.",
    price: {
      min: 800,
      max: 1500
    },
    image: "old-town"
  },
  {
    name: "Seaside Guesthouse in Amalfi",
    location: "Amalfi, Italy",
    country: "Italy",
    starRating: 3,
    description: "Seaside guesthouse in Amalfi offering cozy accommodations, Mediterranean charm, and proximity to beaches and coastal trails.",
    price: {
      min: 150,
      max: 300
    },
    image: "coast"
  },
  {
    name: "Chic Loft in Milan",
    location: "Milan, Italy",
    country: "Italy",
    starRating: 4,
    description: "Chic loft in Milan offering contemporary accommodations, city skyline views, and a fashionable setting near shopping and nightlife districts.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Vineyard Estate in Piedmont",
    location: "Piedmont, Italy",
    country: "Italy",
    starRating: 4,
    description: "Vineyard estate in Piedmont offering boutique accommodations, wine tastings, and scenic views of rolling hills and vineyards.",
    price: {
      min: 500,
      max: 1000
    },
    image: "vineyard"
  },
  {
    name: "Rural Cottage in Cinque Terre",
    location: "Cinque Terre, Italy",
    country: "Italy",
    starRating: 3,
    description: "Rural cottage in Cinque Terre offering quaint accommodations, coastal vistas, and a peaceful retreat near hiking trails and fishing villages.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Lakefront Cabin in Lake Garda",
    location: "Lake Garda, Italy",
    country: "Italy",
    starRating: 3,
    description: "Lakefront cabin in Lake Garda offering cozy accommodations, mountain views, and a serene escape amidst Italy's largest lake.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain-lake"
  },
  {
    name: "Historic Residence in Verona",
    location: "Verona, Italy",
    country: "Italy",
    starRating: 4,
    description: "Historic residence in Verona offering elegant accommodations, Renaissance architecture, and a central location near Juliet's balcony.",
    price: {
      min: 400,
      max: 800
    },
    image: "old-town"
  },
  {
    name: "Mountain Retreat in South Tyrol",
    location: "South Tyrol, Italy",
    country: "Italy",
    starRating: 3,
    description: "Mountain retreat in South Tyrol offering alpine accommodations, outdoor adventures, and a peaceful escape in the Dolomites.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Renaissance Palace in Florence",
    location: "Florence, Italy",
    country: "Italy",
    starRating: 5,
    description: "Renaissance palace in Florence offering opulent accommodations, historic frescoes, and a regal setting near the Uffizi Gallery.",
    price: {
      min: 800,
      max: 1500
    },
    image: "old-town"
  },
  {
    name: "Rustic Cabin in the Alps",
    location: "Italian Alps, Italy",
    country: "Italy",
    starRating: 3,
    description: "Rustic cabin in the Italian Alps offering cozy accommodations, mountain views, and access to skiing and snowboarding.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Luxury Retreat in Capri",
    location: "Capri, Italy",
    country: "Italy",
    starRating: 5,
    description: "Luxury retreat in Capri offering exclusive accommodations, private beaches, and panoramic views of the Mediterranean Sea.",
    price: {
      min: 600,
      max: 1200
    },
    image: "island"
  },
  {
    name: "Tranquil Farmhouse in Tuscany",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 4,
    description: "Tranquil farmhouse in Tuscany offering charming accommodations, rolling hills, and a peaceful setting near wineries and medieval villages.",
    price: {
      min: 400,
      max: 800
    },
    image: "countryside"
  },
  {
    name: "Florence Renaissance District Hotel",
    location: "Florence, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel in Florence's Renaissance district offering elegant accommodations, art galleries, and proximity to historic landmarks.",
    price: {
      min: 250,
      max: 500
    },
    image: "district"
  },
  {
    name: "Sicily Coastal Resort",
    location: "Sicily, Italy",
    country: "Italy",
    starRating: 4,
    description: "Coastal resort in Sicily offering sea views, Mediterranean cuisine, and relaxation on the Italian coast.",
    price: {
      min: 350,
      max: 700
    },
    image: "coast"
  },
  {
    name: "Milan Fashion District Hotel",
    location: "Milan, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel in Milan's fashion district offering stylish accommodations, shopping opportunities, and cultural experiences.",
    price: {
      min: 300,
      max: 600
    },
    image: "district"
  },
  {
    name: "Cinque Terre Coastal Inn",
    location: "Cinque Terre, Italy",
    country: "Italy",
    starRating: 3,
    description: "Inn in Cinque Terre offering coastal views, hiking trails, and relaxation in picturesque fishing villages.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Naples Old Town Boutique Hotel",
    location: "Naples, Italy",
    country: "Italy",
    starRating: 4,
    description: "Boutique hotel in Naples' old town offering charming accommodations, historic charm, and proximity to cultural attractions.",
    price: {
      min: 250,
      max: 500
    },
    image: "old-town"
  },
  {
    name: "Lake Como Lakeside Retreat",
    location: "Lake Como, Italy",
    country: "Italy",
    starRating: 4,
    description: "Lakeside retreat on Lake Como offering panoramic views, boat tours, and relaxation in the Italian Alps.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Puglia Coastal Trullo",
    location: "Puglia, Italy",
    country: "Italy",
    starRating: 3,
    description: "Traditional trullo in Puglia offering rustic accommodations, olive groves, and relaxation in the Italian countryside.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Verona Romeo & Juliet District Hotel",
    location: "Verona, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel in Verona's Romeo & Juliet district offering romantic accommodations, Shakespearean charm, and proximity to historic sites.",
    price: {
      min: 250,
      max: 500
    },
    image: "district"
  },
  {
    name: "Sorrento Coastal Retreat",
    location: "Sorrento, Italy",
    country: "Italy",
    starRating: 4,
    description: "Coastal retreat in Sorrento offering sea views, lemon groves, and relaxation on the Bay of Naples.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Bologna Historic Centre Hotel",
    location: "Bologna, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel in Bologna's historic centre offering characterful accommodations, medieval charm, and proximity to cultural sites.",
    price: {
      min: 250,
      max: 500
    },
    image: "historic-centre"
  },
  {
    name: "Capri Cliffside Resort",
    location: "Capri, Italy",
    country: "Italy",
    starRating: 5,
    description: "Cliffside resort on Capri offering panoramic views, luxury accommodations, and relaxation on the Italian island.",
    price: {
      min: 600,
      max: 1200
    },
    image: "cliff"
  },
  {
    name: "Genoa Old Port Hotel",
    location: "Genoa, Italy",
    country: "Italy",
    starRating: 3,
    description: "Hotel overlooking Genoa's old port offering harbor views, maritime ambiance, and proximity to historic landmarks.",
    price: {
      min: 200,
      max: 400
    },
    image: "port"
  },
  {
    name: "Umbria Countryside Villa",
    location: "Umbria, Italy",
    country: "Italy",
    starRating: 4,
    description: "Villa in the Umbrian countryside offering rural charm, olive groves, and relaxation amidst rolling hills.",
    price: {
      min: 350,
      max: 700
    },
    image: "countryside"
  },
  {
    name: "Turin City Centre Hotel",
    location: "Turin, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel in Turin's city centre offering modern accommodations, cultural experiences, and proximity to historic landmarks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Pisa Leaning Tower View Hotel",
    location: "Pisa, Italy",
    country: "Italy",
    starRating: 3,
    description: "Hotel with views of the Leaning Tower of Pisa offering comfortable accommodations, city exploration, and proximity to landmarks.",
    price: {
      min: 200,
      max: 400
    },
    image: "tower"
  },
  {
    name: "Venetian Lagoon Retreat",
    location: "Venetian Lagoon, Italy",
    country: "Italy",
    starRating: 4,
    description: "Retreat in the Venetian Lagoon offering island views, boat tours, and relaxation in a tranquil setting.",
    price: {
      min: 350,
      max: 700
    },
    image: "lagoon"
  },
  {
    name: "Bari Adriatic Coast Hotel",
    location: "Bari, Italy",
    country: "Italy",
    starRating: 3,
    description: "Hotel on the Adriatic coast in Bari offering sea views, seafood dining, and relaxation on the Italian Riviera.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Siena Medieval District Hotel",
    location: "Siena, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel in Siena's medieval district offering historic accommodations, cobblestone streets, and cultural experiences.",
    price: {
      min: 250,
      max: 500
    },
    image: "district"
  },
  {
    name: "Liguria Coastal Resort",
    location: "Liguria, Italy",
    country: "Italy",
    starRating: 4,
    description: "Coastal resort in Liguria offering sea views, Italian cuisine, and relaxation on the Italian Riviera.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Catania Mount Etna Retreat",
    location: "Catania, Italy",
    country: "Italy",
    starRating: 4,
    description: "Retreat near Mount Etna offering volcano views, Sicilian cuisine, and relaxation amidst natural beauty.",
    price: {
      min: 350,
      max: 700
    },
    image: "mountain"
  },
  {
    name: "Palermo Historic Quarter Hotel",
    location: "Palermo, Italy",
    country: "Italy",
    starRating: 3,
    description: "Hotel in Palermo's historic quarter offering characterful accommodations, Arabic influences, and proximity to cultural sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "historic-quarter"
  },
  {
    name: "Portofino Riviera Retreat",
    location: "Portofino, Italy",
    country: "Italy",
    starRating: 5,
    description: "Riviera retreat in Portofino offering luxury accommodations, harbor views, and relaxation on the Italian Riviera.",
    price: {
      min: 600,
      max: 1200
    },
    image: "riviera"
  },
  {
    name: "Ancona Adriatic Seaside Hotel",
    location: "Ancona, Italy",
    country: "Italy",
    starRating: 3,
    description: "Seaside hotel in Ancona offering Adriatic views, beach access, and relaxation on the Italian coast.",
    price: {
      min: 200,
      max: 400
    },
    image: "seaside"
  },
  {
    name: "Uffizi Gallery District Hotel",
    location: "Florence, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel in Florence's Uffizi Gallery district offering elegant accommodations, art collections, and cultural experiences.",
    price: {
      min: 300,
      max: 600
    },
    image: "district"
  },
  {
    name: "Tranquil Mountain Chalet",
    location: "Dolomites, Italy",
    country: "Italy",
    starRating: 3,
    description: "Cozy chalet in the Dolomites offering stunning views and peaceful surroundings.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Quaint Coastal Inn",
    location: "Cinque Terre, Italy",
    country: "Italy",
    starRating: 3,
    description: "Charming inn in Cinque Terre with coastal views and a relaxing atmosphere.",
    price: {
      min: 250,
      max: 500
    },
    image: "coastal"
  },
  {
    name: "Hidden Oasis",
    location: "Marche, Italy",
    country: "Italy",
    starRating: 4,
    description: "Serene oasis in the Marche region surrounded by nature and tranquility.",
    price: {
      min: 300,
      max: 600
    },
    image: "nature"
  },
  {
    name: "Elegant Residence",
    location: "Florence, Italy",
    country: "Italy",
    starRating: 5,
    description: "Stylish residence in Florence with luxurious amenities and sophisticated decor.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Coastal Retreat",
    location: "Amalfi Coast, Italy",
    country: "Italy",
    starRating: 4,
    description: "Luxurious retreat on the Amalfi Coast offering relaxation and breathtaking views.",
    price: {
      min: 500,
      max: 1000
    },
    image: "sea"
  },
  {
    name: "Romantic Hideaway",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 4,
    description: "Intimate hideaway in Tuscany surrounded by picturesque landscapes and charm.",
    price: {
      min: 350,
      max: 700
    },
    image: "countryside"
  },
  {
    name: "Historic Mansion",
    location: "Rome, Italy",
    country: "Italy",
    starRating: 5,
    description: "Grand historic mansion in Rome offering timeless elegance and luxury accommodations.",
    price: {
      min: 700,
      max: 1500
    },
    image: "historic"
  },
  {
    name: "Secluded Villa",
    location: "Sicily, Italy",
    country: "Italy",
    starRating: 4,
    description: "Private villa in Sicily offering seclusion and Mediterranean charm.",
    price: {
      min: 400,
      max: 800
    },
    image: "villa"
  },
  {
    name: "Charming Inn",
    location: "Venice, Italy",
    country: "Italy",
    starRating: 3,
    description: "Quaint inn in Venice with canal views and cozy accommodations.",
    price: {
      min: 250,
      max: 500
    },
    image: "canal"
  },
  {
    name: "Mediterranean Resort",
    location: "Capri, Italy",
    country: "Italy",
    starRating: 5,
    description: "Luxurious resort in Capri offering Mediterranean sophistication and relaxation.",
    price: {
      min: 600,
      max: 1200
    },
    image: "resort"
  },
  {
    name: "Romantic Retreat on Lake Garda",
    location: "Lake Garda, Italy",
    country: "Italy",
    starRating: 4,
    description: "Romantic retreat on the shores of Lake Garda with views of the Italian Alps and picturesque villages.",
    price: {
      min: 300,
      max: 600
    },
    image: "lake"
  },
  {
    name: "Tuscan Countryside Villa",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 4,
    description: "Traditional countryside villa in Tuscany surrounded by vineyards, olive groves, and rolling hills.",
    price: {
      min: 350,
      max: 700
    },
    image: "countryside"
  },
  {
    name: "Romantic Boutique Hotel in Venice",
    location: "Venice, Italy",
    country: "Italy",
    starRating: 4,
    description: "Boutique hotel in the heart of Venice overlooking romantic canals and historic architecture.",
    price: {
      min: 300,
      max: 600
    },
    image: "canal"
  },
  {
    name: "Luxurious Beach Resort in Sardinia",
    location: "Sardinia, Italy",
    country: "Italy",
    starRating: 5,
    description: "Exclusive beach resort in Sardinia with elegant accommodations, private beaches, and turquoise waters.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Idyllic Vineyard Hotel in Umbria",
    location: "Umbria, Italy",
    country: "Italy",
    starRating: 4,
    description: "Charming hotel nestled in the Umbrian vineyards with rustic charm and breathtaking scenery.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Panoramic Views of Lake Como",
    location: "Lake Como, Italy",
    country: "Italy",
    starRating: 4,
    description: "Hotel offering panoramic views of Lake Como and the surrounding mountains, perfect for a scenic getaway.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain-lake"
  },
  {
    name: "Historic Quarter in Naples",
    location: "Naples, Italy",
    country: "Italy",
    starRating: 3,
    description: "Cozy hotel in the historic quarter of Naples with narrow streets and authentic Neapolitan atmosphere.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Tranquil Retreat in the Dolomites",
    location: "Dolomites, Italy",
    country: "Italy",
    starRating: 4,
    description: "Mountain hotel in the Dolomites offering spectacular mountain views, ideal for hiking and alpine adventures.",
    price: {
      min: 350,
      max: 700
    },
    image: "mountain"
  },
  {
    name: "Scenic Retreat on Capri",
    location: "Capri, Italy",
    country: "Italy",
    starRating: 5,
    description: "Luxurious retreat on Capri with breathtaking views, exclusive accommodations, and Mediterranean flair.",
    price: {
      min: 600,
      max: 1200
    },
    image: "island"
  },
  {
    name: "Charming Coastal Hotel in Amalfi",
    location: "Amalfi, Italy",
    country: "Italy",
    starRating: 4,
    description: "Charming hotel on the Amalfi Coast with views of the Mediterranean, picturesque coves, and Mediterranean lifestyle.",
    price: {
      min: 500,
      max: 1000
    },
    image: "coast"
  },
  {
    name: "Coastal Retreat in Amalfi",
    location: "Amalfi, Italy",
    country: "Italy",
    starRating: 4,
    description: "Coastal retreat in Amalfi offering elegant accommodations, panoramic sea views, and access to picturesque beaches and historic sites.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Historic Villa in Tuscany",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 5,
    description: "Historic villa in Tuscany offering luxurious accommodations, Renaissance architecture, and sprawling vineyards and olive groves.",
    price: {
      min: 500,
      max: 1000
    },
    image: "countryside"
  },
  {
    name: "City Centre Hotel in Rome",
    location: "Rome, Italy",
    country: "Italy",
    starRating: 4,
    description: "City centre hotel in Rome offering stylish accommodations, historic charm, and proximity to iconic landmarks such as the Colosseum and Vatican City.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Seaside Resort in Sicily",
    location: "Sicily, Italy",
    country: "Italy",
    starRating: 4,
    description: "Seaside resort in Sicily offering modern accommodations, Mediterranean cuisine, and access to pristine beaches and ancient ruins.",
    price: {
      min: 350,
      max: 700
    },
    image: "beach"
  },
  {
    name: "Mountain Chalet in the Dolomites",
    location: "Dolomites, Italy",
    country: "Italy",
    starRating: 3,
    description: "Mountain chalet in the Dolomites offering cozy accommodations, alpine views, and access to skiing and hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Boutique Hotel in Venice",
    location: "Venice, Italy",
    country: "Italy",
    starRating: 4,
    description: "Boutique hotel in Venice offering elegant accommodations, romantic canal views, and proximity to St. Mark's Square and Rialto Bridge.",
    price: {
      min: 450,
      max: 900
    },
    image: "canal"
  },
  {
    name: "Countryside Retreat in Umbria",
    location: "Umbria, Italy",
    country: "Italy",
    starRating: 3,
    description: "Countryside retreat in Umbria offering rustic accommodations, rolling hills, and a peaceful escape amidst olive groves and medieval villages.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "Coastal Villa in Cinque Terre",
    location: "Cinque Terre, Italy",
    country: "Italy",
    starRating: 4,
    description: "Coastal villa in Cinque Terre offering charming accommodations, cliffside views, and access to hiking trails and colorful fishing villages.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Rural Agriturismo in Piedmont",
    location: "Piedmont, Italy",
    country: "Italy",
    starRating: 3,
    description: "Rural agriturismo in Piedmont offering farm-style accommodations, vineyard tours, and authentic Italian cuisine.",
    price: {
      min: 150,
      max: 300
    },
    image: "countryside"
  },
  {
    name: "City View Apartment in Florence",
    location: "Florence, Italy",
    country: "Italy",
    starRating: 3,
    description: "City view apartment in Florence offering comfortable accommodations, Renaissance architecture, and a central location near museums and galleries.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Historic Castle in Tuscany",
    location: "Tuscany, Italy",
    country: "Italy",
    starRating: 5,
    description: "Historic castle in Tuscany offering regal accommodations, manicured gardens, and a fairy-tale setting for weddings and special events.",
    price: {
      min: 1000,
      max: 2000
    },
    image: "castle"
  },
  
];
console.log(italyHotels);

// Spain
const spainHotels = [
  {
    name: "Seaside Resort in Costa del Sol",
    location: "Costa del Sol, Spain",
    country: "Spain",
    starRating: 4,
    description: "Luxurious seaside resort in Costa del Sol offering sun-drenched beaches, upscale accommodations, and vibrant nightlife.",
    price: {
      min: 250,
      max: 500
    },
    image: "beach"
  },
  {
    name: "Rustic Retreat in Andalusian Countryside",
    location: "Andalusia, Spain",
    country: "Spain",
    starRating: 3,
    description: "Charming rustic retreat in the heart of Andalusian countryside with olive groves, rolling hills, and authentic Spanish charm.",
    price: {
      min: 150,
      max: 300
    },
    image: "countryside"
  },
  {
    name: "Historic Boutique Hotel in Barcelona",
    location: "Barcelona, Spain",
    country: "Spain",
    starRating: 4,
    description: "Historic boutique hotel in Barcelona's Gothic Quarter offering elegant accommodations, modern amenities, and proximity to iconic landmarks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Sierra Nevada",
    location: "Sierra Nevada, Spain",
    country: "Spain",
    starRating: 4,
    description: "Tranquil mountain retreat in Sierra Nevada offering stunning views, outdoor activities, and relaxation.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Coastal Paradise in Mallorca",
    location: "Mallorca, Spain",
    country: "Spain",
    starRating: 5,
    description: "Exclusive coastal paradise in Mallorca with pristine beaches, luxury villas, and crystal-clear waters.",
    price: {
      min: 500,
      max: 1000
    },
    image: "coast"
  },
  {
    name: "Vineyard Retreat in La Rioja",
    location: "La Rioja, Spain",
    country: "Spain",
    starRating: 4,
    description: "Tranquil vineyard retreat in La Rioja offering wine tasting, gourmet cuisine, and scenic views of vine-covered hills.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Sunny Resort in Canary Islands",
    location: "Canary Islands, Spain",
    country: "Spain",
    starRating: 5,
    description: "Sunny resort in the Canary Islands offering year-round sunshine, sandy beaches, and luxurious accommodations.",
    price: {
      min: 600,
      max: 1200
    },
    image: "island"
  },
  {
    name: "Urban Escape in Madrid",
    location: "Madrid, Spain",
    country: "Spain",
    starRating: 4,
    description: "Urban escape in Madrid offering cultural experiences, world-class dining, and vibrant nightlife.",
    price: {
      min: 400,
      max: 800
    },
    image: "cityscape"
  },
  {
    name: "Serene Retreat in Pyrenees",
    location: "Pyrenees, Spain",
    country: "Spain",
    starRating: 3,
    description: "Serene retreat in the Pyrenees offering breathtaking mountain views, hiking trails, and relaxation.",
    price: {
      min: 150,
      max: 300
    },
    image: "mountain"
  },
  {
    name: "Historic Inn in Granada",
    location: "Granada, Spain",
    country: "Spain",
    starRating: 3,
    description: "Historic inn in Granada offering cozy accommodations, Moorish architecture, and a glimpse into Spain's rich history.",
    price: {
      min: 200,
      max: 400
    },
    image: "historic"
  }, {
    name: "Beachfront Resort in Costa Brava",
    location: "Costa Brava, Spain",
    country: "Spain",
    starRating: 4,
    description: "Luxurious beachfront resort in Costa Brava offering stunning Mediterranean views, upscale amenities, and vibrant coastal atmosphere.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "Rural Getaway in Basque Country",
    location: "Basque Country, Spain",
    country: "Spain",
    starRating: 3,
    description: "Tranquil rural getaway in Basque Country surrounded by lush green landscapes, charming villages, and authentic Basque cuisine.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Modern Boutique Hotel in Valencia",
    location: "Valencia, Spain",
    country: "Spain",
    starRating: 4,
    description: "Modern boutique hotel in Valencia's historic center offering stylish accommodations, innovative cuisine, and cultural experiences.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Ski Resort in Pyrenees",
    location: "Pyrenees, Spain",
    country: "Spain",
    starRating: 4,
    description: "Ski resort in the Pyrenees offering world-class slopes, cozy chalets, and breathtaking mountain scenery.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Luxury Spa Retreat in Marbella",
    location: "Marbella, Spain",
    country: "Spain",
    starRating: 5,
    description: "Luxury spa retreat in Marbella offering pampering spa treatments, gourmet dining, and Mediterranean tranquility.",
    price: {
      min: 600,
      max: 1200
    },
    image: "spa"
  },
  {
    name: "Vineyard Hotel in Penedès",
    location: "Penedès, Spain",
    country: "Spain",
    starRating: 4,
    description: "Charming vineyard hotel in Penedès wine region offering wine tours, tastings, and serene countryside views.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Island Resort in Ibiza",
    location: "Ibiza, Spain",
    country: "Spain",
    starRating: 5,
    description: "Exclusive island resort in Ibiza offering luxury accommodations, vibrant nightlife, and pristine beaches.",
    price: {
      min: 700,
      max: 1500
    },
    image: "island"
  },
  {
    name: "Historic Hotel in Seville",
    location: "Seville, Spain",
    country: "Spain",
    starRating: 4,
    description: "Historic hotel in Seville's old town offering elegant rooms, Andalusian architecture, and proximity to iconic landmarks.",
    price: {
      min: 400,
      max: 800
    },
    image: "historic"
  },
  {
    name: "Mountain Lodge in Sierra de Grazalema",
    location: "Sierra de Grazalema, Spain",
    country: "Spain",
    starRating: 3,
    description: "Cozy mountain lodge in Sierra de Grazalema offering outdoor adventures, rustic charm, and breathtaking nature.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Charming Guesthouse in Ronda",
    location: "Ronda, Spain",
    country: "Spain",
    starRating: 3,
    description: "Charming guesthouse in Ronda offering comfortable accommodations, panoramic views, and Andalusian hospitality.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Coastal Boutique Hotel in San Sebastián",
    location: "San Sebastián, Spain",
    country: "Spain",
    starRating: 4,
    description: "Boutique hotel on the coast of San Sebastián offering stylish accommodations, gourmet dining, and stunning sea views.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Historic Parador in Toledo",
    location: "Toledo, Spain",
    country: "Spain",
    starRating: 4,
    description: "Historic parador in Toledo offering charming rooms, medieval ambiance, and panoramic views of the city.",
    price: {
      min: 350,
      max: 700
    },
    image: "historic"
  },
  {
    name: "Sunny Beachfront Resort in Tenerife",
    location: "Tenerife, Spain",
    country: "Spain",
    starRating: 5,
    description: "Sunny beachfront resort in Tenerife with luxurious amenities, vibrant nightlife, and panoramic ocean views.",
    price: {
      min: 600,
      max: 1200
    },
    image: "beach"
  },
  {
    name: "Rural Retreat in La Garrotxa",
    location: "La Garrotxa, Spain",
    country: "Spain",
    starRating: 3,
    description: "Tranquil rural retreat in La Garrotxa offering cozy cottages, scenic nature trails, and authentic Catalan cuisine.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Modern Design Hotel in Bilbao",
    location: "Bilbao, Spain",
    country: "Spain",
    starRating: 4,
    description: "Modern design hotel in Bilbao featuring sleek interiors, cutting-edge amenities, and proximity to Guggenheim Museum.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Mountain Chalet in Picos de Europa",
    location: "Picos de Europa, Spain",
    country: "Spain",
    starRating: 4,
    description: "Cozy mountain chalet in Picos de Europa offering alpine charm, outdoor adventures, and breathtaking vistas.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Secluded Beach Retreat in Menorca",
    location: "Menorca, Spain",
    country: "Spain",
    starRating: 5,
    description: "Secluded beach retreat in Menorca with private coves, turquoise waters, and luxury accommodations.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Historic Castle Hotel in Segovia",
    location: "Segovia, Spain",
    country: "Spain",
    starRating: 4,
    description: "Historic castle hotel in Segovia offering regal suites, medieval charm, and panoramic views of the city.",
    price: {
      min: 400,
      max: 800
    },
    image: "historic"
  },
  {
    name: "Ski Lodge in Sierra Nevada",
    location: "Sierra Nevada, Spain",
    country: "Spain",
    starRating: 3,
    description: "Ski lodge in Sierra Nevada offering cozy accommodations, après-ski activities, and access to world-class slopes.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Urban Chic Hotel in Valencia",
    location: "Valencia, Spain",
    country: "Spain",
    starRating: 4,
    description: "Urban chic hotel in Valencia with contemporary design, rooftop pool, and vibrant city views.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Luxury Resort in Costa Blanca",
    location: "Costa Blanca, Spain",
    country: "Spain",
    starRating: 5,
    description: "Luxury resort in Costa Blanca offering opulent accommodations, world-class amenities, and panoramic views of the Mediterranean.",
    price: {
      min: 700,
      max: 1500
    },
    image: "resort"
  },
  {
    name: "Historic Boutique Hotel in Cordoba",
    location: "Cordoba, Spain",
    country: "Spain",
    starRating: 4,
    description: "Historic boutique hotel in Cordoba's old town featuring Moorish architecture, elegant interiors, and Andalusian charm.",
    price: {
      min: 350,
      max: 700
    },
    image: "historic"
  },
  {
    name: "Beachfront Villa in Ibiza",
    location: "Ibiza, Spain",
    country: "Spain",
    starRating: 5,
    description: "Exclusive beachfront villa in Ibiza offering luxurious amenities, private infinity pool, and stunning sunset views.",
    price: {
      min: 800,
      max: 2000
    },
    image: "beach"
  },
  {
    name: "Rural Retreat in Extremadura",
    location: "Extremadura, Spain",
    country: "Spain",
    starRating: 3,
    description: "Tranquil rural retreat in Extremadura surrounded by rolling hills, oak forests, and authentic Spanish countryside.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Design Hotel in Malaga",
    location: "Malaga, Spain",
    country: "Spain",
    starRating: 4,
    description: "Sleek design hotel in Malaga's trendy district offering contemporary accommodations, rooftop bar, and artistic ambiance.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Pyrenees",
    location: "Pyrenees, Spain",
    country: "Spain",
    starRating: 4,
    description: "Tranquil mountain retreat in the Pyrenees offering cozy lodgings, alpine hikes, and breathtaking views.",
    price: {
      min: 350,
      max: 700
    },
    image: "mountain"
  },
  {
    name: "Seaside Escape in Canary Islands",
    location: "Canary Islands, Spain",
    country: "Spain",
    starRating: 4,
    description: "Seaside escape in the Canary Islands featuring sandy beaches, turquoise waters, and laid-back island vibes.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Seville's Santa Cruz",
    location: "Seville, Spain",
    country: "Spain",
    starRating: 4,
    description: "Chic boutique hotel in Seville's historic Santa Cruz district offering stylish rooms, Andalusian courtyard, and personalized service.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Ski Resort in Sierra de Guadarrama",
    location: "Sierra de Guadarrama, Spain",
    country: "Spain",
    starRating: 4,
    description: "Ski resort in Sierra de Guadarrama offering ski-in/ski-out accommodations, snow-covered slopes, and apres-ski activities.",
    price: {
      min: 400,
      max: 800
    },
    image: "ski"
  },
  {
    name: "Urban Retreat in Barcelona",
    location: "Barcelona, Spain",
    country: "Spain",
    starRating: 5,
    description: "Urban retreat in Barcelona offering contemporary design, rooftop pool, and stunning views of the city skyline.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  }, {
    name: "Budget-Friendly Hotel in Valencia",
    location: "Valencia, Spain",
    country: "Spain",
    starRating: 2,
    description: "Budget-friendly hotel in Valencia offering comfortable accommodations, convenient location, and affordability.",
    price: {
      min: 100,
      max: 200
    },
    image: "city"
  },
  {
    name: "Seaside Guesthouse in Costa Brava",
    location: "Costa Brava, Spain",
    country: "Spain",
    starRating: 3,
    description: "Charming seaside guesthouse in Costa Brava offering cozy rooms, sea views, and authentic Catalan hospitality.",
    price: {
      min: 150,
      max: 300
    },
    image: "beach"
  },
  {
    name: "Family-Friendly Resort in Mallorca",
    location: "Mallorca, Spain",
    country: "Spain",
    starRating: 3,
    description: "Family-friendly resort in Mallorca featuring kid-friendly amenities, entertainment programs, and beach access.",
    price: {
      min: 200,
      max: 400
    },
    image: "family"
  },
  {
    name: "Hostel in Madrid's City Center",
    location: "Madrid, Spain",
    country: "Spain",
    starRating: 1,
    description: "Budget-friendly hostel in Madrid's city center offering dormitory-style accommodations, communal areas, and backpacker atmosphere.",
    price: {
      min: 50,
      max: 100
    },
    image: "city"
  },
  {
    name: "Mountain Lodge in Pyrenees",
    location: "Pyrenees, Spain",
    country: "Spain",
    starRating: 2,
    description: "Mountain lodge in the Pyrenees offering simple rooms, basic amenities, and access to hiking trails.",
    price: {
      min: 100,
      max: 200
    },
    image: "mountain"
  },
  {
    name: "Basic Guesthouse in Granada",
    location: "Granada, Spain",
    country: "Spain",
    starRating: 2,
    description: "Basic guesthouse in Granada offering affordable rooms, communal bathrooms, and proximity to tourist attractions.",
    price: {
      min: 80,
      max: 160
    },
    image: "city"
  },
  {
    name: "Cozy Inn in Seville",
    location: "Seville, Spain",
    country: "Spain",
    starRating: 3,
    description: "Cozy inn in Seville's historic center offering traditional Andalusian charm, courtyard, and personalized service.",
    price: {
      min: 150,
      max: 300
    },
    image: "old-town"
  },
  {
    name: "Guesthouse in Canary Islands",
    location: "Canary Islands, Spain",
    country: "Spain",
    starRating: 2,
    description: "Guesthouse in the Canary Islands offering simple accommodations, friendly atmosphere, and proximity to beaches.",
    price: {
      min: 80,
      max: 160
    },
    image: "beach"
  },
  {
    name: "Rural Retreat in Galicia",
    location: "Galicia, Spain",
    country: "Spain",
    starRating: 2,
    description: "Rural retreat in Galicia offering rustic cottages, farm-to-table dining, and tranquility amidst nature.",
    price: {
      min: 120,
      max: 240
    },
    image: "countryside"
  },
  {
    name: "Hostal in Barcelona",
    location: "Barcelona, Spain",
    country: "Spain",
    starRating: 1,
    description: "Budget-friendly hostal in Barcelona offering no-frills accommodations, shared facilities, and affordability.",
    price: {
      min: 50,
      max: 100
    },
    image: "city"
  },
  {
    name: "Luxury Resort in Costa del Sol",
    location: "Costa del Sol, Spain",
    country: "Spain",
    starRating: 5,
    description: "Luxury resort in Costa del Sol offering opulent accommodations, world-class amenities, and panoramic views of the Mediterranean.",
    price: {
      min: 700,
      max: 1500
    },
    image: "resort"
  },
  {
    name: "Historic Boutique Hotel in Barcelona",
    location: "Barcelona, Spain",
    country: "Spain",
    starRating: 4,
    description: "Historic boutique hotel in Barcelona's Gothic Quarter offering elegant accommodations, modern amenities, and proximity to iconic landmarks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Seaside Villa in Mallorca",
    location: "Mallorca, Spain",
    country: "Spain",
    starRating: 4,
    description: "Seaside villa in Mallorca offering luxurious amenities, private pool, and breathtaking views of the Mediterranean.",
    price: {
      min: 600,
      max: 1200
    },
    image: "villa"
  },
  {
    name: "Charming Inn in Seville",
    location: "Seville, Spain",
    country: "Spain",
    starRating: 3,
    description: "Charming inn in Seville's historic center offering cozy rooms, Andalusian courtyard, and warm hospitality.",
    price: {
      min: 150,
      max: 300
    },
    image: "old-town"
  },
  {
    name: "Budget Hotel in Madrid",
    location: "Madrid, Spain",
    country: "Spain",
    starRating: 2,
    description: "Budget hotel in Madrid offering affordable accommodations, basic amenities, and convenient location.",
    price: {
      min: 100,
      max: 200
    },
    image: "city"
  },
  {
    name: "Rural Retreat in Pyrenees",
    location: "Pyrenees, Spain",
    country: "Spain",
    starRating: 1,
    description: "Rural retreat in the Pyrenees offering simple lodgings, tranquility, and access to hiking trails.",
    price: {
      min: 50,
      max: 100
    },
    image: "mountain"
  },
  {
    name: "Cozy Guesthouse in Valencia",
    location: "Valencia, Spain",
    country: "Spain",
    starRating: 2,
    description: "Cozy guesthouse in Valencia offering comfortable rooms, friendly atmosphere, and affordability.",
    price: {
      min: 80,
      max: 160
    },
    image: "city"
  },
  {
    name: "Beachfront Hostel in Ibiza",
    location: "Ibiza, Spain",
    country: "Spain",
    starRating: 1,
    description: "Beachfront hostel in Ibiza offering budget-friendly accommodations, social atmosphere, and proximity to nightlife.",
    price: {
      min: 30,
      max: 60
    },
    image: "beach"
  },
  {
    name: "Mountain Cabin in Sierra Nevada",
    location: "Sierra Nevada, Spain",
    country: "Spain",
    starRating: 3,
    description: "Cozy mountain cabin in Sierra Nevada offering rustic charm, mountain views, and access to outdoor activities.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Boutique Hotel in Granada",
    location: "Granada, Spain",
    country: "Spain",
    starRating: 5,
    description: "Boutique hotel in Granada offering luxurious accommodations, personalized service, and breathtaking views of the Alhambra.",
    price: {
      min: 800,
      max: 1600
    },
    image: "historic"
  },
  {
    name: "Seaside Resort in Mallorca",
    location: "Mallorca, Spain",
    country: "Spain",
    starRating: 4,
    description: "Seaside resort in Mallorca offering luxurious accommodations, Mediterranean views, and access to beaches and water sports.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "City Centre Hotel in Barcelona",
    location: "Barcelona, Spain",
    country: "Spain",
    starRating: 4,
    description: "City centre hotel in Barcelona offering modern accommodations, vibrant city views, and proximity to attractions and nightlife.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Sierra Nevada",
    location: "Sierra Nevada, Spain",
    country: "Spain",
    starRating: 3,
    description: "Mountain retreat in Sierra Nevada offering cozy accommodations, mountain views, and access to skiing and hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Historic Parador in Granada",
    location: "Granada, Spain",
    country: "Spain",
    starRating: 4,
    description: "Historic parador in Granada offering elegant accommodations, Moorish architecture, and a central location near the Alhambra.",
    price: {
      min: 300,
      max: 600
    },
    image: "old-town"
  },
  {
    name: "Beachfront Resort in Costa del Sol",
    location: "Costa del Sol, Spain",
    country: "Spain",
    starRating: 5,
    description: "Beachfront resort in Costa del Sol offering luxurious accommodations, exclusive amenities, and panoramic views of the Mediterranean.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Vineyard Retreat in La Rioja",
    location: "La Rioja, Spain",
    country: "Spain",
    starRating: 4,
    description: "Vineyard retreat in La Rioja offering boutique accommodations, wine tastings, and scenic views of the vineyards.",
    price: {
      min: 350,
      max: 700
    },
    image: "vineyard"
  },
  {
    name: "Seaside Villa in Ibiza",
    location: "Ibiza, Spain",
    country: "Spain",
    starRating: 4,
    description: "Seaside villa in Ibiza offering private accommodations, infinity pool, and stunning views of the Mediterranean Sea.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Rural Retreat in Andalusia",
    location: "Andalusia, Spain",
    country: "Spain",
    starRating: 3,
    description: "Rural retreat in Andalusia offering authentic accommodations, olive groves, and a tranquil escape in the countryside.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Boutique Hotel in Madrid",
    location: "Madrid, Spain",
    country: "Spain",
    starRating: 4,
    description: "Boutique hotel in Madrid offering stylish accommodations, cultural experiences, and a central location near museums and landmarks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Coastal Retreat in Tenerife",
    location: "Tenerife, Spain",
    country: "Spain",
    starRating: 4,
    description: "Coastal retreat in Tenerife offering comfortable accommodations, oceanfront views, and access to beaches and volcanic landscapes.",
    price: {
      min: 350,
      max: 700
    },
    image: "coast"
  },
  {
    name: "Historic Parador in Seville",
    location: "Seville, Spain",
    country: "Spain",
    starRating: 5,
    description: "Historic parador in Seville offering luxurious accommodations, Andalusian architecture, and a central location near historic landmarks.",
    price: {
      min: 400,
      max: 800
    },
    image: "old-town"
  },
  {
    name: "Coastal Apartment in Valencia",
    location: "Valencia, Spain",
    country: "Spain",
    starRating: 4,
    description: "Coastal apartment in Valencia offering modern accommodations, sea views, and proximity to beaches and cultural attractions.",
    price: {
      min: 250,
      max: 500
    },
    image: "beach"
  },
  {
    name: "Mountain Chalet in Pyrenees",
    location: "Pyrenees, Spain",
    country: "Spain",
    starRating: 3,
    description: "Mountain chalet in the Pyrenees offering cozy accommodations, alpine views, and access to skiing and outdoor adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "City Centre Hotel in Madrid",
    location: "Madrid, Spain",
    country: "Spain",
    starRating: 4,
    description: "City centre hotel in Madrid offering elegant accommodations, cultural experiences, and a central location near shopping and dining.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Rural Cottage in Galicia",
    location: "Galicia, Spain",
    country: "Spain",
    starRating: 3,
    description: "Rural cottage in Galicia offering traditional accommodations, countryside views, and a peaceful retreat in the Spanish countryside.",
    price: {
      min: 150,
      max: 300
    },
    image: "countryside"
  },
  {
    name: "Beachfront Resort in Marbella",
    location: "Marbella, Spain",
    country: "Spain",
    starRating: 5,
    description: "Beachfront resort in Marbella offering luxurious accommodations, exclusive amenities, and panoramic views of the Mediterranean Sea.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Villa with Private Pool in Costa Brava",
    location: "Costa Brava, Spain",
    country: "Spain",
    starRating: 4,
    description: "Villa with private pool in Costa Brava offering spacious accommodations, coastal views, and a relaxing getaway on the Spanish coast.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Urban Loft in Bilbao",
    location: "Bilbao, Spain",
    country: "Spain",
    starRating: 4,
    description: "Urban loft in Bilbao offering stylish accommodations, city views, and proximity to museums, restaurants, and nightlife.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Rustic Finca in Mallorca",
    location: "Mallorca, Spain",
    country: "Spain",
    starRating: 3,
    description: "Rustic finca in Mallorca offering authentic accommodations, rural charm, and a tranquil escape in the Spanish countryside.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Luxury Villa in Canary Islands",
    location: "Canary Islands, Spain",
    country: "Spain",
    starRating: 5,
    description: "Luxury villa in the Canary Islands offering premium accommodations, private amenities, and breathtaking ocean views.",
    price: {
      min: 600,
      max: 1200
    },
    image: "island"
  }
];
console.log(spainHotels);


// United Kindom
const ukHotels = [
  {
    name: "Luxury Hotel in London's West End",
    location: "London, United Kingdom",
    country: "United Kingdom",
    starRating: 5,
    description: "Luxury hotel in London's West End offering elegant accommodations, Michelin-starred dining, and exclusive access to theaters and shopping.",
    price: {
      min: 500,
      max: 1000
    },
    image: "city"
  },
  {
    name: "Cozy Bed and Breakfast in Cotswolds",
    location: "Cotswolds, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Cozy bed and breakfast in the picturesque Cotswolds offering charming rooms, homemade breakfast, and tranquil countryside views.",
    price: {
      min: 150,
      max: 300
    },
    image: "countryside"
  },
  {
    name: "Historic Inn in Edinburgh's Old Town",
    location: "Edinburgh, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Historic inn in Edinburgh's Old Town offering comfortable accommodations, traditional Scottish cuisine, and proximity to iconic landmarks.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Seaside Resort in Brighton",
    location: "Brighton, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Seaside resort in Brighton offering stylish accommodations, vibrant nightlife, and panoramic views of the English Channel.",
    price: {
      min: 250,
      max: 500
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Bath",
    location: "Bath, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Boutique hotel in Bath offering chic accommodations, spa facilities, and historic charm near the Roman Baths.",
    price: {
      min: 300,
      max: 600
    },
    image: "historic"
  },
  {
    name: "Country House Hotel in Lake District",
    location: "Lake District, United Kingdom",
    country: "United Kingdom",
    starRating: 5,
    description: "Country house hotel in the Lake District offering luxurious rooms, gourmet dining, and stunning views of the lakes and mountains.",
    price: {
      min: 600,
      max: 1200
    },
    image: "countryside"
  },
  {
    name: "Quaint Guesthouse in Cambridge",
    location: "Cambridge, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Quaint guesthouse in Cambridge offering cozy rooms, English breakfast, and convenient access to university colleges and historic sites.",
    price: {
      min: 150,
      max: 300
    },
    image: "city"
  },
  {
    name: "Rustic Inn in Scottish Highlands",
    location: "Scottish Highlands, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Rustic inn in the Scottish Highlands offering simple accommodations, hearty Scottish fare, and breathtaking views of the rugged landscape.",
    price: {
      min: 100,
      max: 200
    },
    image: "mountain"
  },
  {
    name: "Budget Hotel in Manchester",
    location: "Manchester, United Kingdom",
    country: "United Kingdom",
    starRating: 2,
    description: "Budget hotel in Manchester offering affordable accommodations, basic amenities, and convenient location near attractions and transportation.",
    price: {
      min: 80,
      max: 160
    },
    image: "city"
  },
  {
    name: "Charming Cottage in Cornwall",
    location: "Cornwall, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Charming cottage in Cornwall offering self-catering accommodation, coastal views, and access to beaches and hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Historic Manor House in Surrey",
    location: "Surrey, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Historic manor house in Surrey offering elegant rooms, manicured gardens, and a tranquil escape from city life.",
    price: {
      min: 300,
      max: 600
    },
    image: "countryside"
  },
  {
    name: "City Centre Hotel in Liverpool",
    location: "Liverpool, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "City centre hotel in Liverpool offering comfortable accommodations, proximity to attractions, and vibrant nightlife.",
    price: {
      min: 150,
      max: 300
    },
    image: "city"
  },
  {
    name: "Secluded Cottage in Scottish Isles",
    location: "Scottish Isles, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Secluded cottage in the Scottish Isles offering peaceful retreat, stunning landscapes, and opportunities for wildlife spotting.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Riverside Hotel in York",
    location: "York, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Riverside hotel in York offering scenic views, historic charm, and easy access to the city's medieval attractions.",
    price: {
      min: 250,
      max: 500
    },
    image: "river"
  },
  {
    name: "Traditional Pub with Rooms in Oxford",
    location: "Oxford, United Kingdom",
    country: "United Kingdom",
    starRating: 2,
    description: "Traditional pub with rooms in Oxford offering affordable accommodations, hearty meals, and a cozy atmosphere.",
    price: {
      min: 100,
      max: 200
    },
    image: "city"
  },
  {
    name: "Modern Apartment in Manchester",
    location: "Manchester, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Modern apartment in Manchester offering sleek design, city views, and convenient access to shopping and entertainment.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Seaside Guesthouse in Whitby",
    location: "Whitby, United Kingdom",
    country: "United Kingdom",
    starRating: 2,
    description: "Seaside guesthouse in Whitby offering cozy rooms, sea views, and proximity to Whitby Abbey and the Yorkshire coastline.",
    price: {
      min: 80,
      max: 160
    },
    image: "beach"
  },
  {
    name: "Charming Farmhouse in Devon",
    location: "Devon, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Charming farmhouse in Devon offering rustic charm, farm-to-table dining, and panoramic views of the countryside.",
    price: {
      min: 150,
      max: 300
    },
    image: "countryside"
  },
  {
    name: "Budget-Friendly Hostel in Edinburgh",
    location: "Edinburgh, United Kingdom",
    country: "United Kingdom",
    starRating: 1,
    description: "Budget-friendly hostel in Edinburgh offering dormitory-style accommodations, communal facilities, and a central location.",
    price: {
      min: 50,
      max: 100
    },
    image: "city"
  },
  {
    name: "Historic Castle Hotel in Wales",
    location: "Wales, United Kingdom",
    country: "United Kingdom",
    starRating: 5,
    description: "Historic castle hotel in Wales offering luxurious rooms, fine dining, and a majestic setting amidst rolling hills.",
    price: {
      min: 800,
      max: 1600
    },
    image: "castle"
  },
  {
    name: "Modern Boutique Hotel in Shoreditch",
    location: "Shoreditch, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Modern boutique hotel in the trendy Shoreditch neighborhood offering stylish rooms, vibrant nightlife, and eclectic dining options.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Victorian Bed and Breakfast in Kensington",
    location: "Kensington, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Victorian bed and breakfast in the elegant Kensington district offering charming rooms, traditional English breakfast, and proximity to museums.",
    price: {
      min: 150,
      max: 300
    },
    image: "old-town"
  },
  {
    name: "Luxury Riverside Hotel in Canary Wharf",
    location: "Canary Wharf, London",
    country: "United Kingdom",
    starRating: 5,
    description: "Luxury riverside hotel in Canary Wharf offering opulent accommodations, Michelin-starred dining, and panoramic views of the Thames.",
    price: {
      min: 700,
      max: 1500
    },
    image: "river"
  },
  {
    name: "Chic Art Hotel in South Bank",
    location: "South Bank, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Chic art hotel in South Bank offering contemporary design, art-inspired interiors, and close proximity to cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Historic Townhouse in Bloomsbury",
    location: "Bloomsbury, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Historic townhouse in Bloomsbury offering elegant rooms, period features, and a literary heritage near the British Museum.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Boutique Hotel in Covent Garden",
    location: "Covent Garden, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Boutique hotel in Covent Garden offering chic accommodations, designer boutiques, and lively street performances.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Grand Hotel in Mayfair",
    location: "Mayfair, London",
    country: "United Kingdom",
    starRating: 5,
    description: "Grand hotel in the prestigious Mayfair district offering luxurious rooms, gourmet dining, and unparalleled service.",
    price: {
      min: 800,
      max: 1600
    },
    image: "city"
  },
  {
    name: "Budget-Friendly Hostel in Camden",
    location: "Camden, London",
    country: "United Kingdom",
    starRating: 2,
    description: "Budget-friendly hostel in Camden offering affordable accommodations, communal facilities, and a vibrant music scene.",
    price: {
      min: 50,
      max: 100
    },
    image: "city"
  },
  {
    name: "Contemporary Apartment in Notting Hill",
    location: "Notting Hill, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Contemporary apartment in Notting Hill offering modern design, bustling markets, and charming cafes.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Quaint Guesthouse in Hampstead",
    location: "Hampstead, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Quaint guesthouse in Hampstead offering cozy rooms, leafy surroundings, and easy access to Hampstead Heath.",
    price: {
      min: 150,
      max: 300
    },
    image: "city"
  },
  {
    name: "Retro-Style Hotel in Soho",
    location: "Soho, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Retro-style hotel in Soho offering funky decor, lively nightlife, and proximity to theaters and restaurants.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Historic Inn in Greenwich",
    location: "Greenwich, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Historic inn in Greenwich offering comfortable rooms, maritime heritage, and scenic views of the Thames.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Boutique Hotel in Chelsea",
    location: "Chelsea, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Boutique hotel in Chelsea offering elegant accommodations, designer shops, and upscale dining.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Budget-Friendly Guesthouse in Brixton",
    location: "Brixton, London",
    country: "United Kingdom",
    starRating: 2,
    description: "Budget-friendly guesthouse in Brixton offering simple rooms, diverse cuisine, and a vibrant street culture.",
    price: {
      min: 80,
      max: 160
    },
    image: "city"
  },
  {
    name: "Modern Hostel in King's Cross",
    location: "King's Cross, London",
    country: "United Kingdom",
    starRating: 2,
    description: "Modern hostel in King's Cross offering affordable accommodations, social atmosphere, and convenient access to transportation.",
    price: {
      min: 50,
      max: 100
    },
    image: "city"
  },
  {
    name: "Luxury Apartment in Knightsbridge",
    location: "Knightsbridge, London",
    country: "United Kingdom",
    starRating: 5,
    description: "Luxury apartment in Knightsbridge offering spacious living, designer furnishings, and exclusive shopping at Harrods.",
    price: {
      min: 700,
      max: 1500
    },
    image: "city"
  },
  {
    name: "Charming Pension in Marylebone",
    location: "Marylebone, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Charming pension in Marylebone offering cozy rooms, leafy streets, and proximity to Regent's Park and Madame Tussauds.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Seaside Retreat in Southend-on-Sea",
    location: "Southend-on-Sea, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Seaside retreat in Southend-on-Sea offering comfortable accommodations, sandy beaches, and family-friendly attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "Quirky Hotel in Camden Market",
    location: "Camden Market, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Quirky hotel in Camden Market offering unique accommodations, vibrant street art, and eclectic shopping.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Riverside Hotel in Richmond",
    location: "Richmond, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Riverside hotel in Richmond offering scenic views of the Thames, historic charm, and easy access to Richmond Park.",
    price: {
      min: 350,
      max: 700
    },
    image: "river"
  },
  {
    name: "Historic Inn in Windsor",
    location: "Windsor, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Historic inn in Windsor offering traditional rooms, cobbled streets, and proximity to Windsor Castle and Legoland.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Boutique Hotel in Belgravia",
    location: "Belgravia, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Boutique hotel in Belgravia offering luxurious accommodations, upscale boutiques, and Michelin-starred dining.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Chic Townhouse in Notting Hill",
    location: "Notting Hill, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Chic townhouse in Notting Hill offering stylish rooms, colorful houses, and trendy cafes.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Rural Retreat in Surrey Hills",
    location: "Surrey Hills, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Rural retreat in Surrey Hills offering peaceful surroundings, scenic trails, and cozy accommodations.",
    price: {
      min: 300,
      max: 600
    },
    image: "countryside"
  },
  {
    name: "Budget-Friendly Hotel in Greenwich",
    location: "Greenwich, London",
    country: "United Kingdom",
    starRating: 2,
    description: "Budget-friendly hotel in Greenwich offering simple accommodations, historic landmarks, and scenic river views.",
    price: {
      min: 100,
      max: 200
    },
    image: "city"
  },
  {
    name: "Modern Apartment in Canary Wharf",
    location: "Canary Wharf, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Modern apartment in Canary Wharf offering sleek design, waterfront living, and proximity to financial district.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Historic Coaching Inn in Bath",
    location: "Bath, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Historic coaching inn in Bath offering characterful rooms, traditional pub fare, and easy access to Roman Baths.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Boutique Hotel in Chelsea",
    location: "Chelsea, London",
    country: "United Kingdom",
    starRating: 4,
    description: "Boutique hotel in Chelsea offering elegant accommodations, designer shops, and upscale dining.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Seaside Guesthouse in Brighton",
    location: "Brighton, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Seaside guesthouse in Brighton offering cozy rooms, sea views, and proximity to Brighton Pier and the Lanes.",
    price: {
      min: 200,
      max: 400
    },
    image: "beach"
  },
  {
    name: "City Centre Hotel in Leicester Square",
    location: "Leicester Square, London",
    country: "United Kingdom",
    starRating: 4,
    description: "City centre hotel in Leicester Square offering comfortable rooms, theaters, and lively entertainment.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Contemporary Guesthouse in Hackney",
    location: "Hackney, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Contemporary guesthouse in Hackney offering stylish rooms, artisanal cafes, and vibrant street art.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Riverside Retreat in Kingston upon Thames",
    location: "Kingston upon Thames, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Riverside retreat in Kingston upon Thames offering peaceful surroundings, scenic walks, and easy access to Hampton Court Palace.",
    price: {
      min: 350,
      max: 700
    },
    image: "river"
  },
  {
    name: "Historic Hotel in Hampstead",
    location: "Hampstead, London",
    country: "United Kingdom",
    starRating: 3,
    description: "Historic hotel in Hampstead offering traditional charm, leafy surroundings, and proximity to Hampstead Heath.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Riverside Apartment in London",
    location: "London, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Riverside apartment in London offering modern accommodations, Thames River views, and proximity to attractions and shopping.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Country Inn in the Cotswolds",
    location: "Cotswolds, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Country inn in the Cotswolds offering charming accommodations, scenic countryside views, and traditional British hospitality.",
    price: {
      min: 150,
      max: 300
    },
    image: "countryside"
  },
  {
    name: "Seaside B&B in Brighton",
    location: "Brighton, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Seaside bed and breakfast in Brighton offering cozy accommodations, seafront views, and access to the beach and nightlife.",
    price: {
      min: 100,
      max: 200
    },
    image: "beach"
  },
  {
    name: "Highland Lodge in Scotland",
    location: "Scottish Highlands, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Highland lodge in Scotland offering rustic accommodations, breathtaking mountain views, and access to outdoor activities.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "City Centre Hotel in Edinburgh",
    location: "Edinburgh, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "City centre hotel in Edinburgh offering elegant accommodations, historic charm, and proximity to Edinburgh Castle and Royal Mile.",
    price: {
      min: 250,
      max: 500
    },
    image: "city"
  },
  {
    name: "Coastal Cottage in Cornwall",
    location: "Cornwall, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Coastal cottage in Cornwall offering traditional accommodations, sea views, and access to beaches and coastal walks.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Lakeside Retreat in Lake District",
    location: "Lake District, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Lakeside retreat in the Lake District offering peaceful accommodations, lake views, and access to hiking trails and water activities.",
    price: {
      min: 300,
      max: 600
    },
    image: "lake"
  },
  {
    name: "Historic Manor House in Bath",
    location: "Bath, United Kingdom",
    country: "United Kingdom",
    starRating: 5,
    description: "Historic manor house in Bath offering luxurious accommodations, period features, and manicured gardens.",
    price: {
      min: 400,
      max: 800
    },
    image: "countryside"
  },
  {
    name: "Castle Hotel in Wales",
    location: "Wales, United Kingdom",
    country: "United Kingdom",
    starRating: 5,
    description: "Castle hotel in Wales offering regal accommodations, medieval charm, and a unique stay in a historic setting.",
    price: {
      min: 500,
      max: 1000
    },
    image: "castle"
  },
  {
    name: "Quaint Cottage in the Peak District",
    location: "Peak District, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Quaint cottage in the Peak District offering cozy accommodations, countryside views, and access to hiking trails and quaint villages.",
    price: {
      min: 150,
      max: 300
    },
    image: "countryside"
  },
  {
    name: "Seaside Hotel in Blackpool",
    location: "Blackpool, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Seaside hotel in Blackpool offering comfortable accommodations, seafront views, and proximity to the promenade and attractions.",
    price: {
      min: 100,
      max: 200
    },
    image: "beach"
  },
  {
    name: "Quirky B&B in Bristol",
    location: "Bristol, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Quirky bed and breakfast in Bristol offering eclectic accommodations, artistic decor, and a vibrant atmosphere.",
    price: {
      min: 80,
      max: 160
    },
    image: "city"
  },
  {
    name: "Countryside Retreat in Norfolk",
    location: "Norfolk, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Countryside retreat in Norfolk offering peaceful accommodations, rural views, and access to nature reserves and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Riverside Guesthouse in Cambridge",
    location: "Cambridge, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Riverside guesthouse in Cambridge offering cozy accommodations, scenic river views, and proximity to the university and museums.",
    price: {
      min: 150,
      max: 300
    },
    image: "river"
  },
  {
    name: "Urban Apartment in Manchester",
    location: "Manchester, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Urban apartment in Manchester offering modern accommodations, city views, and proximity to shopping, dining, and nightlife.",
    price: {
      min: 120,
      max: 240
    },
    image: "city"
  },
  {
    name: "Farmstay in Yorkshire Dales",
    location: "Yorkshire Dales, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Farmstay in Yorkshire Dales offering traditional accommodations, farm experiences, and scenic countryside walks.",
    price: {
      min: 100,
      max: 200
    },
    image: "countryside"
  },
  {
    name: "Coastal Retreat in Dorset",
    location: "Dorset, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Coastal retreat in Dorset offering stylish accommodations, coastal views, and access to Jurassic Coast beaches and landmarks.",
    price: {
      min: 250,
      max: 500
    },
    image: "coast"
  },
  {
    name: "City Centre Hotel in Birmingham",
    location: "Birmingham, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "City centre hotel in Birmingham offering comfortable accommodations, city skyline views, and proximity to attractions and shopping.",
    price: {
      min: 120,
      max: 240
    },
    image: "city"
  },
  {
    name: "Historic Inn in York",
    location: "York, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Historic inn in York offering elegant accommodations, medieval charm, and a central location near York Minster and Shambles.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Cottage by the Sea in Devon",
    location: "Devon, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Cottage by the sea in Devon offering quaint accommodations, sea views, and access to coastal walks and fishing villages.",
    price: {
      min: 150,
      max: 300
    },
    image: "beach"
  },
  {
    name: "Rural Farmhouse in Cornwall",
    location: "Cornwall, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Rural farmhouse in Cornwall offering cozy accommodations, countryside views, and a peaceful escape from the hustle and bustle.",
    price: {
      min: 100,
      max: 200
    },
    image: "countryside"
  },
  {
    name: "Secluded Cottage in the Lake District",
    location: "Lake District, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Secluded cottage in the Lake District offering charming accommodations, stunning views, and access to hiking trails and lakes.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Urban Loft in Glasgow",
    location: "Glasgow, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Urban loft in Glasgow offering stylish accommodations, city skyline views, and a vibrant atmosphere in the heart of the city.",
    price: {
      min: 150,
      max: 300
    },
    image: "city"
  },
  {
    name: "Coastal Guesthouse in Norfolk",
    location: "Norfolk, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Coastal guesthouse in Norfolk offering comfortable accommodations, sea views, and a relaxing seaside retreat.",
    price: {
      min: 80,
      max: 160
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Bath",
    location: "Bath, United Kingdom",
    country: "United Kingdom",
    starRating: 5,
    description: "Boutique hotel in Bath offering luxurious accommodations, spa facilities, and a historic setting near the Roman Baths.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Countryside Manor in Oxfordshire",
    location: "Oxfordshire, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Countryside manor in Oxfordshire offering elegant accommodations, manicured gardens, and a tranquil setting for relaxation.",
    price: {
      min: 250,
      max: 500
    },
    image: "countryside"
  },
  {
    name: "City Apartment in Liverpool",
    location: "Liverpool, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "City apartment in Liverpool offering modern accommodations, waterfront views, and proximity to museums and nightlife.",
    price: {
      min: 120,
      max: 240
    },
    image: "city"
  },
  {
    name: "Seaside Inn in Whitby",
    location: "Whitby, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Seaside inn in Whitby offering cozy accommodations, harbor views, and a charming coastal atmosphere.",
    price: {
      min: 100,
      max: 200
    },
    image: "beach"
  },
  {
    name: "Riverside Cottage in Cambridge",
    location: "Cambridge, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Riverside cottage in Cambridge offering traditional accommodations, scenic river views, and a peaceful retreat near the university.",
    price: {
      min: 150,
      max: 300
    },
    image: "river"
  },
  {
    name: "Historic Inn in Canterbury",
    location: "Canterbury, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Historic inn in Canterbury offering elegant accommodations, medieval charm, and a central location near Canterbury Cathedral.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Coastal Retreat in Scarborough",
    location: "Scarborough, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Coastal retreat in Scarborough offering comfortable accommodations, sea views, and a relaxing stay by the beach.",
    price: {
      min: 120,
      max: 240
    },
    image: "beach"
  },
  {
    name: "Country House in Hampshire",
    location: "Hampshire, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Country house in Hampshire offering refined accommodations, expansive grounds, and a peaceful setting for countryside escapes.",
    price: {
      min: 300,
      max: 600
    },
    image: "countryside"
  },
  {
    name: "Quaint Cottage in Stratford-upon-Avon",
    location: "Stratford-upon-Avon, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Quaint cottage in Stratford-upon-Avon offering cozy accommodations, Shakespearean charm, and a historic setting near the theatre.",
    price: {
      min: 150,
      max: 300
    },
    image: "old-town"
  },
  {
    name: "Mountain Lodge in Snowdonia",
    location: "Snowdonia, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Mountain lodge in Snowdonia offering rustic accommodations, mountain views, and access to hiking trails and outdoor adventures.",
    price: {
      min: 150,
      max: 300
    },
    image: "mountain"
  },
  {
    name: "Riverside Retreat in York",
    location: "York, United Kingdom",
    country: "United Kingdom",
    starRating: 4,
    description: "Riverside retreat in York offering modern accommodations, river views, and a tranquil setting near historic attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "river"
  },
  {
    name: "Seaside Cottage in Bournemouth",
    location: "Bournemouth, United Kingdom",
    country: "United Kingdom",
    starRating: 3,
    description: "Seaside cottage in Bournemouth offering charming accommodations, coastal views, and a relaxing stay near the beach.",
    price: {
      min: 100,
      max: 200
    },
    image: "beach"
  }


];

console.log(ukHotels);

// United States
const usHotels = [
  {
    name: "Luxury Hotel in Manhattan",
    location: "Manhattan, New York City",
    country: "United States",
    starRating: 5,
    description: "Luxury hotel in the heart of Manhattan offering opulent accommodations, skyline views, and proximity to iconic landmarks.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Beachfront Resort in Miami",
    location: "Miami Beach, Florida",
    country: "United States",
    starRating: 4,
    description: "Beachfront resort in Miami offering luxurious amenities, ocean views, and vibrant nightlife.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Aspen",
    location: "Aspen, Colorado",
    country: "United States",
    starRating: 4,
    description: "Mountain lodge in Aspen offering cozy accommodations, ski-in/ski-out access, and scenic views of the Rocky Mountains.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Historic Hotel in Boston",
    location: "Boston, Massachusetts",
    country: "United States",
    starRating: 4,
    description: "Historic hotel in Boston offering elegant rooms, colonial charm, and proximity to Freedom Trail and Faneuil Hall.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Desert Oasis in Scottsdale",
    location: "Scottsdale, Arizona",
    country: "United States",
    starRating: 4,
    description: "Desert oasis in Scottsdale offering luxurious accommodations, spa treatments, and championship golf courses.",
    price: {
      min: 400,
      max: 800
    },
    image: "desert"
  },
  {
    name: "Charming Inn in Napa Valley",
    location: "Napa Valley, California",
    country: "United States",
    starRating: 3,
    description: "Charming inn in Napa Valley offering vineyard views, wine tastings, and gourmet dining experiences.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Lakeside Resort in Lake Tahoe",
    location: "Lake Tahoe, California",
    country: "United States",
    starRating: 4,
    description: "Lakeside resort in Lake Tahoe offering outdoor adventures, spa services, and breathtaking views of the Sierra Nevada.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "Historic Inn in Charleston",
    location: "Charleston, South Carolina",
    country: "United States",
    starRating: 3,
    description: "Historic inn in Charleston offering antebellum charm, southern hospitality, and proximity to historic sites and beaches.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Urban Boutique Hotel in Portland",
    location: "Portland, Oregon",
    country: "United States",
    starRating: 4,
    description: "Urban boutique hotel in Portland offering hip accommodations, local artwork, and access to eclectic neighborhoods.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Secluded Retreat in Big Sur",
    location: "Big Sur, California",
    country: "United States",
    starRating: 5,
    description: "Secluded retreat in Big Sur offering cliffside accommodations, ocean views, and tranquility amidst redwood forests.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Historic Hotel in New Orleans",
    location: "French Quarter, New Orleans, Louisiana",
    country: "United States",
    starRating: 4,
    description: "Historic hotel in the French Quarter of New Orleans offering elegant rooms, jazz performances, and Creole cuisine.",
    price: {
      min: 300,
      max: 600
    },
    image: "old-town"
  },
  {
    name: "Ski Resort in Park City",
    location: "Park City, Utah",
    country: "United States",
    starRating: 4,
    description: "Ski resort in Park City offering world-class slopes, luxury accommodations, and après-ski entertainment.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Coastal Retreat in Cape Cod",
    location: "Cape Cod, Massachusetts",
    country: "United States",
    starRating: 4,
    description: "Coastal retreat in Cape Cod offering seaside charm, fresh seafood, and picturesque lighthouses.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Luxury Resort in Maui",
    location: "Maui, Hawaii",
    country: "United States",
    starRating: 5,
    description: "Luxury resort in Maui offering lavish accommodations, pristine beaches, and stunning sunsets over the Pacific Ocean.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Historic Hotel in Savannah",
    location: "Savannah, Georgia",
    country: "United States",
    starRating: 3,
    description: "Historic hotel in Savannah offering charming rooms, cobblestone streets, and southern hospitality.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Urban Boutique Hotel in San Francisco",
    location: "San Francisco, California",
    country: "United States",
    starRating: 4,
    description: "Urban boutique hotel in San Francisco offering stylish accommodations, panoramic bay views, and eclectic neighborhoods.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Luxury Resort in Palm Springs",
    location: "Palm Springs, California",
    country: "United States",
    starRating: 5,
    description: "Luxury resort in Palm Springs offering desert oasis accommodations, world-class spa treatments, and championship golf courses.",
    price: {
      min: 600,
      max: 1200
    },
    image: "desert"
  },
  {
    name: "Chic Hotel in Austin",
    location: "Austin, Texas",
    country: "United States",
    starRating: 4,
    description: "Chic hotel in Austin offering modern accommodations, live music venues, and eclectic dining experiences.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Historic Inn in Newport",
    location: "Newport, Rhode Island",
    country: "United States",
    starRating: 3,
    description: "Historic inn in Newport offering quaint rooms, coastal charm, and proximity to Gilded Age mansions.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Mountain Lodge in Lake Placid",
    location: "Lake Placid, New York",
    country: "United States",
    starRating: 4,
    description: "Mountain lodge in Lake Placid offering rustic accommodations, outdoor adventures, and stunning views of the Adirondacks.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Beach Resort in Malibu",
    location: "Malibu, California",
    country: "United States",
    starRating: 4,
    description: "Beach resort in Malibu offering luxury accommodations, celebrity sightings, and world-famous surf breaks.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Urban Retreat in Seattle",
    location: "Seattle, Washington",
    country: "United States",
    starRating: 4,
    description: "Urban retreat in Seattle offering contemporary accommodations, stunning views of Puget Sound, and a thriving culinary scene.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Historic Hotel in Williamsburg",
    location: "Williamsburg, Virginia",
    country: "United States",
    starRating: 3,
    description: "Historic hotel in Williamsburg offering colonial charm, period furnishings, and living history experiences.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Boutique Hotel in Santa Fe",
    location: "Santa Fe, New Mexico",
    country: "United States",
    starRating: 4,
    description: "Boutique hotel in Santa Fe offering adobe-style accommodations, vibrant arts scene, and southwestern cuisine.",
    price: {
      min: 300,
      max: 600
    },
    image: "desert"
  },
  {
    name: "Cozy Inn in Bar Harbor",
    location: "Bar Harbor, Maine",
    country: "United States",
    starRating: 3,
    description: "Cozy inn in Bar Harbor offering comfortable rooms, harbor views, and access to Acadia National Park.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Resort in Hilton Head Island",
    location: "Hilton Head Island, South Carolina",
    country: "United States",
    starRating: 4,
    description: "Resort in Hilton Head Island offering beachfront accommodations, world-class golf courses, and family-friendly amenities.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Historic Hotel in Gettysburg",
    location: "Gettysburg, Pennsylvania",
    country: "United States",
    starRating: 3,
    description: "Historic hotel in Gettysburg offering period furnishings, Civil War history, and proximity to battlefield sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Ski Lodge in Jackson Hole",
    location: "Jackson Hole, Wyoming",
    country: "United States",
    starRating: 4,
    description: "Ski lodge in Jackson Hole offering rustic accommodations, world-class skiing, and breathtaking views of the Tetons.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Seaside Inn in Newport Beach",
    location: "Newport Beach, California",
    country: "United States",
    starRating: 3,
    description: "Seaside inn in Newport Beach offering cozy rooms, coastal vibes, and outdoor activities like surfing and sailing.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Savannah",
    location: "Savannah, Georgia",
    country: "United States",
    starRating: 4,
    description: "Boutique hotel in Savannah offering elegant accommodations, southern charm, and proximity to historic squares.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Mountain Resort in Lake Tahoe",
    location: "Lake Tahoe, California",
    country: "United States",
    starRating: 4,
    description: "Mountain resort in Lake Tahoe offering alpine accommodations, year-round outdoor activities, and panoramic lake views.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Urban Retreat in Chicago",
    location: "Chicago, Illinois",
    country: "United States",
    starRating: 4,
    description: "Urban retreat in Chicago offering stylish accommodations, iconic architecture, and world-class dining and entertainment.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Historic Inn in Williamsburg",
    location: "Williamsburg, Virginia",
    country: "United States",
    starRating: 3,
    description: "Historic inn in Williamsburg offering colonial charm, period furnishings, and living history experiences.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Historic Hotel in Charleston",
    location: "Charleston, South Carolina",
    country: "United States",
    starRating: 4,
    description: "Historic hotel in Charleston offering elegant accommodations, southern hospitality, and proximity to historic landmarks.",
    price: {
      min: 300,
      max: 600
    },
    image: "old-town"
  },
  {
    name: "Beach Resort in Key West",
    location: "Key West, Florida",
    country: "United States",
    starRating: 4,
    description: "Beach resort in Key West offering tropical accommodations, vibrant nightlife, and stunning sunsets.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Retreat in Boulder",
    location: "Boulder, Colorado",
    country: "United States",
    starRating: 3,
    description: "Mountain retreat in Boulder offering outdoor adventures, scenic hikes, and a laid-back atmosphere.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Luxury Resort in Lake Geneva",
    location: "Lake Geneva, Wisconsin",
    country: "United States",
    starRating: 5,
    description: "Luxury resort in Lake Geneva offering opulent accommodations, lakefront views, and championship golf courses.",
    price: {
      min: 600,
      max: 1200
    },
    image: "lake"
  },
  {
    name: "Urban Boutique Hotel in Portland",
    location: "Portland, Oregon",
    country: "United States",
    starRating: 4,
    description: "Urban boutique hotel in Portland offering stylish accommodations, local artwork, and a vibrant arts scene.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Historic Inn in Mystic",
    location: "Mystic, Connecticut",
    country: "United States",
    starRating: 3,
    description: "Historic inn in Mystic offering cozy rooms, maritime history, and proximity to Mystic Seaport.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Ranch Resort in Jackson",
    location: "Jackson, Wyoming",
    country: "United States",
    starRating: 4,
    description: "Ranch resort in Jackson offering rustic accommodations, horseback riding, and western adventures.",
    price: {
      min: 500,
      max: 1000
    },
    image: "ranch"
  },
  {
    name: "Modern Hotel in Minneapolis",
    location: "Minneapolis, Minnesota",
    country: "United States",
    starRating: 4,
    description: "Modern hotel in Minneapolis offering sleek accommodations, vibrant neighborhoods, and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Coastal Inn in Newport",
    location: "Newport, Rhode Island",
    country: "United States",
    starRating: 3,
    description: "Coastal inn in Newport offering comfortable rooms, harbor views, and fresh seafood.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Ski Resort in Stowe",
    location: "Stowe, Vermont",
    country: "United States",
    starRating: 4,
    description: "Ski resort in Stowe offering alpine accommodations, powder-filled slopes, and après-ski relaxation.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "City Center Hotel in New York",
    location: "New York City, New York",
    country: "United States",
    starRating: 4,
    description: "City center hotel in New York offering modern accommodations, skyline views, and proximity to Times Square and Central Park.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Harborfront Hotel in Boston",
    location: "Boston, Massachusetts",
    country: "United States",
    starRating: 4,
    description: "Harborfront hotel in Boston offering elegant rooms, waterfront views, and access to historic sites like the Freedom Trail.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Downtown Hotel in Washington D.C.",
    location: "Washington D.C.",
    country: "United States",
    starRating: 4,
    description: "Downtown hotel in Washington D.C. offering sophisticated accommodations, proximity to the National Mall, and iconic landmarks.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Waterfront Resort in Miami",
    location: "Miami, Florida",
    country: "United States",
    starRating: 4,
    description: "Waterfront resort in Miami offering luxurious accommodations, ocean views, and access to South Beach and vibrant nightlife.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Downtown Boutique Hotel in Philadelphia",
    location: "Philadelphia, Pennsylvania",
    country: "United States",
    starRating: 4,
    description: "Downtown boutique hotel in Philadelphia offering stylish accommodations, cultural attractions, and eclectic dining.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Waterfront Resort in Charleston",
    location: "Charleston, South Carolina",
    country: "United States",
    starRating: 4,
    description: "Waterfront resort in Charleston offering southern charm, historic architecture, and coastal cuisine.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Downtown Hotel in Atlanta",
    location: "Atlanta, Georgia",
    country: "United States",
    starRating: 3,
    description: "Downtown hotel in Atlanta offering comfortable accommodations, urban vibes, and proximity to attractions like the Georgia Aquarium.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Waterfront Resort in Savannah",
    location: "Savannah, Georgia",
    country: "United States",
    starRating: 4,
    description: "Waterfront resort in Savannah offering luxurious accommodations, river views, and southern hospitality.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "City Center Hotel in Baltimore",
    location: "Baltimore, Maryland",
    country: "United States",
    starRating: 3,
    description: "City center hotel in Baltimore offering convenient accommodations, historic charm, and access to Inner Harbor attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Boutique Hotel in Providence",
    location: "Providence, Rhode Island",
    country: "United States",
    starRating: 4,
    description: "Boutique hotel in Providence offering stylish accommodations, artistic flair, and proximity to WaterFire events.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Luxury Hotel in San Francisco",
    location: "San Francisco, California",
    country: "United States",
    starRating: 5,
    description: "Luxury hotel in San Francisco offering lavish accommodations, panoramic bay views, and proximity to iconic landmarks like the Golden Gate Bridge.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Beachfront Resort in Los Angeles",
    location: "Los Angeles, California",
    country: "United States",
    starRating: 5,
    description: "Beachfront resort in Los Angeles offering luxurious accommodations, ocean views, and access to world-famous beaches and attractions.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Urban Boutique Hotel in Seattle",
    location: "Seattle, Washington",
    country: "United States",
    starRating: 4,
    description: "Urban boutique hotel in Seattle offering chic accommodations, stunning views of Puget Sound, and proximity to Pike Place Market and Space Needle.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Resort in San Diego",
    location: "San Diego, California",
    country: "United States",
    starRating: 4,
    description: "Resort in San Diego offering upscale accommodations, year-round sunshine, and access to beautiful beaches and family-friendly attractions.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Downtown Hotel in Portland",
    location: "Portland, Oregon",
    country: "United States",
    starRating: 4,
    description: "Downtown hotel in Portland offering modern accommodations, vibrant neighborhoods, and a thriving food and arts scene.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Coastal Resort in Monterey",
    location: "Monterey, California",
    country: "United States",
    starRating: 4,
    description: "Coastal resort in Monterey offering serene accommodations, oceanfront dining, and access to scenic drives along the Pacific Coast Highway.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Santa Barbara",
    location: "Santa Barbara, California",
    country: "United States",
    starRating: 4,
    description: "Boutique hotel in Santa Barbara offering stylish accommodations, Mediterranean charm, and proximity to wineries and beaches.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Lake Tahoe",
    location: "Lake Tahoe, California",
    country: "United States",
    starRating: 4,
    description: "Mountain retreat in Lake Tahoe offering cozy accommodations, alpine adventures, and panoramic views of the Sierra Nevada.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Urban Hotel in Vancouver",
    location: "Vancouver, British Columbia, Canada",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Vancouver offering modern accommodations, breathtaking views of the mountains and ocean, and access to Stanley Park and Granville Island.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Coastal Inn in Newport Beach",
    location: "Newport Beach, California",
    country: "United States",
    starRating: 4,
    description: "Coastal inn in Newport Beach offering comfortable accommodations, beachfront access, and a relaxed Southern California vibe.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Ski Resort in Aspen",
    location: "Aspen, Colorado",
    country: "United States",
    starRating: 4,
    description: "Ski resort in Aspen offering luxurious accommodations, world-class skiing, and upscale dining and shopping.",
    price: {
      min: 600,
      max: 1200
    },
    image: "mountain"
  },
  {
    name: "Cozy Lodge in Glacier National Park",
    location: "Glacier National Park, Montana",
    country: "United States",
    starRating: 3,
    description: "Cozy lodge in Glacier National Park offering rustic accommodations, breathtaking mountain views, and access to hiking trails and wildlife.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Historic Hotel in Anchorage",
    location: "Anchorage, Alaska",
    country: "United States",
    starRating: 3,
    description: "Historic hotel in Anchorage offering comfortable accommodations, Alaska Native art, and access to outdoor adventures like glacier cruises and wildlife tours.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Jackson Hole",
    location: "Jackson Hole, Wyoming",
    country: "United States",
    starRating: 4,
    description: "Mountain retreat in Jackson Hole offering rustic accommodations, western hospitality, and proximity to Grand Teton National Park.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Lakefront Resort in Lake Placid",
    location: "Lake Placid, New York",
    country: "United States",
    starRating: 4,
    description: "Lakefront resort in Lake Placid offering serene accommodations, water activities, and access to Adirondack Mountains hiking trails.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Coastal Inn in Bar Harbor",
    location: "Bar Harbor, Maine",
    country: "United States",
    starRating: 3,
    description: "Coastal inn in Bar Harbor offering comfortable accommodations, coastal charm, and access to Acadia National Park.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Mountain Lodge in Lake Tahoe",
    location: "Lake Tahoe, California",
    country: "United States",
    starRating: 4,
    description: "Mountain lodge in Lake Tahoe offering cozy accommodations, alpine adventures, and panoramic views of the Sierra Nevada.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Island Resort in Mackinac Island",
    location: "Mackinac Island, Michigan",
    country: "United States",
    starRating: 4,
    description: "Island resort in Mackinac Island offering historic accommodations, horse-drawn carriage rides, and Victorian charm.",
    price: {
      min: 400,
      max: 800
    },
    image: "island"
  },
  {
    name: "Urban Hotel in Portland",
    location: "Portland, Oregon",
    country: "United States",
    starRating: 4,
    description: "Urban hotel in Portland offering modern accommodations, eclectic neighborhoods, and access to local breweries and food carts.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Cozy Inn in Jackson",
    location: "Jackson, New Hampshire",
    country: "United States",
    starRating: 3,
    description: "Cozy inn in Jackson offering comfortable accommodations, scenic mountain views, and proximity to White Mountain National Forest.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Cozy Cabin in the Smoky Mountains",
    location: "Gatlinburg, Tennessee",
    country: "United States",
    starRating: 3,
    description: "Cozy cabin nestled in the Smoky Mountains offering rustic accommodations, scenic views, and access to hiking trails.",
    price: {
      min: 150,
      max: 300
    },
    image: "mountain"
  },
  {
    name: "Luxury Resort in Las Vegas",
    location: "Las Vegas, Nevada",
    country: "United States",
    starRating: 5,
    description: "Luxury resort in Las Vegas offering extravagant accommodations, world-class entertainment, and a vibrant nightlife.",
    price: {
      min: 500,
      max: 1000
    },
    image: "city"
  },
  {
    name: "Beachfront Hotel in Miami",
    location: "Miami, Florida",
    country: "United States",
    starRating: 4,
    description: "Beachfront hotel in Miami offering stylish accommodations, ocean views, and access to sandy beaches.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Aspen",
    location: "Aspen, Colorado",
    country: "United States",
    starRating: 4,
    description: "Mountain lodge in Aspen offering upscale accommodations, alpine charm, and proximity to skiing and outdoor activities.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Urban Loft in New York City",
    location: "New York City, New York",
    country: "United States",
    starRating: 4,
    description: "Urban loft in New York City offering modern accommodations, city skyline views, and proximity to attractions and dining.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Ranch Retreat in Montana",
    location: "Montana, United States",
    country: "United States",
    starRating: 3,
    description: "Ranch retreat in Montana offering authentic accommodations, wide-open spaces, and outdoor adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "ranch"
  },
  {
    name: "Historic Inn in Charleston",
    location: "Charleston, South Carolina",
    country: "United States",
    starRating: 4,
    description: "Historic inn in Charleston offering elegant accommodations, southern charm, and a central location in the historic district.",
    price: {
      min: 300,
      max: 600
    },
    image: "old-town"
  },
  {
    name: "Ski Resort in Park City",
    location: "Park City, Utah",
    country: "United States",
    starRating: 4,
    description: "Ski resort in Park City offering luxury accommodations, world-class skiing, and après-ski entertainment.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Seaside Resort in Cape Cod",
    location: "Cape Cod, Massachusetts",
    country: "United States",
    starRating: 4,
    description: "Seaside resort in Cape Cod offering charming accommodations, coastal views, and access to beaches and seafood dining.",
    price: {
      min: 350,
      max: 700
    },
    image: "beach"
  },
  {
    name: "Mountain Retreat in Lake Tahoe",
    location: "Lake Tahoe, California",
    country: "United States",
    starRating: 3,
    description: "Mountain retreat in Lake Tahoe offering cozy accommodations, lake views, and access to skiing and outdoor recreation.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Desert Oasis in Scottsdale",
    location: "Scottsdale, Arizona",
    country: "United States",
    starRating: 4,
    description: "Desert oasis in Scottsdale offering luxurious accommodations, desert views, and access to golf courses and spa facilities.",
    price: {
      min: 400,
      max: 800
    },
    image: "desert"
  },
  {
    name: "Historic Hotel in Savannah",
    location: "Savannah, Georgia",
    country: "United States",
    starRating: 4,
    description: "Historic hotel in Savannah offering elegant accommodations, southern hospitality, and a central location in the historic district.",
    price: {
      min: 300,
      max: 600
    },
    image: "old-town"
  },
  {
    name: "Lakefront Retreat in Lake Placid",
    location: "Lake Placid, New York",
    country: "United States",
    starRating: 3,
    description: "Lakefront retreat in Lake Placid offering cozy accommodations, lake views, and access to hiking and water activities.",
    price: {
      min: 250,
      max: 500
    },
    image: "lake"
  },
  {
    name: "Urban Boutique Hotel in San Francisco",
    location: "San Francisco, California",
    country: "United States",
    starRating: 4,
    description: "Urban boutique hotel in San Francisco offering stylish accommodations, city views, and proximity to attractions and dining.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Beach Resort in Hilton Head",
    location: "Hilton Head, South Carolina",
    country: "United States",
    starRating: 4,
    description: "Beach resort in Hilton Head offering upscale accommodations, oceanfront views, and access to golf courses and water sports.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Jackson Hole",
    location: "Jackson Hole, Wyoming",
    country: "United States",
    starRating: 3,
    description: "Mountain lodge in Jackson Hole offering rustic accommodations, mountain views, and proximity to skiing and outdoor adventures.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Waterfront Hotel in Newport",
    location: "Newport, Rhode Island",
    country: "United States",
    starRating: 4,
    description: "Waterfront hotel in Newport offering elegant accommodations, harbor views, and access to sailing and historic mansions.",
    price: {
      min: 350,
      max: 700
    },
    image: "coast"
  },
  {
    name: "Rural Retreat in Vermont",
    location: "Vermont, United States",
    country: "United States",
    starRating: 3,
    description: "Rural retreat in Vermont offering cozy accommodations, pastoral views, and access to hiking trails and maple syrup farms.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Urban Retreat in Chicago",
    location: "Chicago, Illinois",
    country: "United States",
    starRating: 4,
    description: "Urban retreat in Chicago offering modern accommodations, skyline views, and proximity to museums, shopping, and dining.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Coastal Resort in Monterey",
    location: "Monterey, California",
    country: "United States",
    starRating: 4,
    description: "Coastal resort in Monterey offering luxury accommodations, oceanfront views, and access to golf courses and marine activities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  }
];

console.log(usHotels);

// Canada
const canadaHotels = [
  {
    name: "Luxury Hotel in Vancouver",
    location: "Vancouver, British Columbia",
    country: "Canada",
    starRating: 5,
    description: "Luxury hotel in Vancouver offering lavish accommodations, stunning mountain and ocean views, and proximity to Stanley Park.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Coastal Resort in Victoria",
    location: "Victoria, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Coastal resort in Victoria offering elegant accommodations, oceanfront views, and access to Butchart Gardens.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Urban Boutique Hotel in Toronto",
    location: "Toronto, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Toronto offering stylish accommodations, skyline views, and proximity to CN Tower and Distillery District.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Mountain Lodge in Banff",
    location: "Banff, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain lodge in Banff offering cozy accommodations, breathtaking views of the Canadian Rockies, and access to outdoor adventures.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Historic Hotel in Quebec City",
    location: "Quebec City, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Historic hotel in Quebec City offering charming accommodations, old-world architecture, and proximity to historic sites and cobblestone streets.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Downtown Hotel in Montreal",
    location: "Montreal, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Downtown hotel in Montreal offering modern accommodations, vibrant neighborhoods, and access to cultural attractions and festivals.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Ski Resort in Whistler",
    location: "Whistler, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Ski resort in Whistler offering luxurious accommodations, world-class skiing, and vibrant après-ski activities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Lakefront Resort in Muskoka",
    location: "Muskoka, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Lakefront resort in Muskoka offering serene accommodations, water activities, and access to beautiful lakes and forests.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Coastal Inn in Halifax",
    location: "Halifax, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Coastal inn in Halifax offering comfortable accommodations, maritime charm, and access to historic waterfront and seafood restaurants.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Mountain Retreat in Jasper",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain retreat in Jasper offering rustic accommodations, stunning mountain views, and access to Jasper National Park.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Urban Hotel in Ottawa",
    location: "Ottawa, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Ottawa offering modern accommodations, cultural attractions, and proximity to Parliament Hill.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Charming Inn in Charlottetown",
    location: "Charlottetown, Prince Edward Island",
    country: "Canada",
    starRating: 3,
    description: "Charming inn in Charlottetown offering cozy accommodations, historic charm, and access to beautiful coastal scenery.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Downtown Hotel in Calgary",
    location: "Calgary, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Downtown hotel in Calgary offering modern accommodations, city views, and access to Calgary Stampede and urban parks.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Lakefront Lodge in Kelowna",
    location: "Kelowna, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Lakefront lodge in Kelowna offering serene accommodations, vineyard tours, and access to Okanagan Lake.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Cozy Lodge in Blue Mountains",
    location: "Blue Mountains, Ontario",
    country: "Canada",
    starRating: 3,
    description: "Cozy lodge in Blue Mountains offering comfortable accommodations, skiing, and proximity to scenic hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Historic Hotel in St. John's",
    location: "St. John's, Newfoundland and Labrador",
    country: "Canada",
    starRating: 3,
    description: "Historic hotel in St. John's offering charming accommodations, coastal views, and access to Signal Hill and colorful row houses.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Urban Boutique Hotel in Winnipeg",
    location: "Winnipeg, Manitoba",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Winnipeg offering stylish accommodations, cultural attractions, and proximity to The Forks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Downtown Hotel in Edmonton",
    location: "Edmonton, Alberta",
    country: "Canada",
    starRating: 3,
    description: "Downtown hotel in Edmonton offering comfortable accommodations, urban charm, and access to West Edmonton Mall.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Mountain Resort in Canmore",
    location: "Canmore, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain resort in Canmore offering luxurious accommodations, breathtaking views of the Canadian Rockies, and outdoor activities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Seaside Retreat in Tofino",
    location: "Tofino, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Seaside retreat in Tofino offering beachfront accommodations, stunning ocean views, and access to surfing and whale watching.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Lakeside Hotel in Jasper",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Lakeside hotel in Jasper offering serene accommodations, panoramic lake views, and access to outdoor adventures in Jasper National Park.",
    price: {
      min: 500,
      max: 1000
    },
    image: "lake"
  },
  {
    name: "City Center Hotel in Regina",
    location: "Regina, Saskatchewan",
    country: "Canada",
    starRating: 3,
    description: "City center hotel in Regina offering modern accommodations, urban charm, and proximity to Wascana Centre and Royal Saskatchewan Museum.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Historic Lodge in Niagara-on-the-Lake",
    location: "Niagara-on-the-Lake, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Historic lodge in Niagara-on-the-Lake offering charming accommodations, vineyard tours, and proximity to Niagara Falls.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Urban Hotel in Saskatoon",
    location: "Saskatoon, Saskatchewan",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Saskatoon offering comfortable accommodations, city views, and access to Meewasin Valley Trail and Wanuskewin Heritage Park.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Coastal Inn in St. Andrews",
    location: "St. Andrews, New Brunswick",
    country: "Canada",
    starRating: 3,
    description: "Coastal inn in St. Andrews offering cozy accommodations, coastal charm, and access to Kingsbrae Garden and whale watching tours.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Mountain Resort in Fernie",
    location: "Fernie, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Mountain resort in Fernie offering luxurious accommodations, ski-in/ski-out access, and panoramic views of the Canadian Rockies.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Urban Boutique Hotel in Kingston",
    location: "Kingston, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Kingston offering stylish accommodations, historic charm, and proximity to Kingston Waterfront and Fort Henry.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Riverside Inn in Whitehorse",
    location: "Whitehorse, Yukon",
    country: "Canada",
    starRating: 3,
    description: "Riverside inn in Whitehorse offering comfortable accommodations, scenic views, and access to Yukon River and wilderness adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "river"
  },
  {
    name: "Lakefront Resort in Kenora",
    location: "Kenora, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Lakefront resort in Kenora offering serene accommodations, water activities, and access to beautiful Lake of the Woods.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Mountain Lodge in Revelstoke",
    location: "Revelstoke, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Mountain lodge in Revelstoke offering cozy accommodations, breathtaking mountain views, and access to skiing and hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Urban Hotel in Fredericton",
    location: "Fredericton, New Brunswick",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Fredericton offering modern accommodations, city views, and proximity to Fredericton Boyce Farmers Market and Beaverbrook Art Gallery.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Historic Inn in Lunenburg",
    location: "Lunenburg, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Historic inn in Lunenburg offering charming accommodations, coastal views, and access to Lunenburg's historic waterfront.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Luxury Hotel in Toronto",
    location: "Toronto, Ontario",
    country: "Canada",
    starRating: 5,
    description: "Luxury hotel in Toronto offering sophisticated accommodations, fine dining, and stunning city views.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Mountain Chalet in Banff",
    location: "Banff, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain chalet in Banff offering rustic accommodations, breathtaking views, and easy access to outdoor activities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Beachside Resort in Tofino",
    location: "Tofino, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Beachside resort in Tofino offering luxurious accommodations, ocean views, and surfing opportunities.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Urban Retreat in Montreal",
    location: "Montreal, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Urban retreat in Montreal offering modern accommodations, vibrant nightlife, and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Historic Inn in Quebec City",
    location: "Quebec City, Quebec",
    country: "Canada",
    starRating: 3,
    description: "Historic inn in Quebec City offering charming accommodations, cobblestone streets, and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Luxury Resort in Lake Louise",
    location: "Lake Louise, Alberta",
    country: "Canada",
    starRating: 5,
    description: "Luxury resort in Lake Louise offering stunning lake views, luxurious accommodations, and outdoor activities.",
    price: {
      min: 600,
      max: 1200
    },
    image: "lake"
  },
  {
    name: "Charming B&B in Niagara-on-the-Lake",
    location: "Niagara-on-the-Lake, Ontario",
    country: "Canada",
    starRating: 3,
    description: "Charming B&B in Niagara-on-the-Lake offering cozy accommodations, wine tasting tours, and scenic views.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Downtown Hotel in Ottawa",
    location: "Ottawa, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Downtown hotel in Ottawa offering modern accommodations, city views, and proximity to Parliament Hill.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Cozy Cabin in Jasper",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 3,
    description: "Cozy cabin in Jasper offering rustic accommodations, mountain views, and access to Jasper National Park.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Lakefront Hotel in Kelowna",
    location: "Kelowna, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Lakefront hotel in Kelowna offering serene accommodations, vineyard tours, and access to Okanagan Lake.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Urban Hotel in Winnipeg",
    location: "Winnipeg, Manitoba",
    country: "Canada",
    starRating: 3,
    description: "Urban hotel in Winnipeg offering comfortable accommodations, cultural attractions, and proximity to The Forks.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Beach Resort in Prince Edward Island",
    location: "Prince Edward Island, Canada",
    country: "Canada",
    starRating: 4,
    description: "Beach resort in Prince Edward Island offering beachfront accommodations, stunning coastal views, and seafood dining.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Whistler",
    location: "Whistler, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Mountain lodge in Whistler offering cozy accommodations, world-class skiing, and scenic views.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Historic Hotel in Victoria",
    location: "Victoria, British Columbia",
    country: "Canada",
    starRating: 3,
    description: "Historic hotel in Victoria offering charming accommodations, historic architecture, and proximity to the waterfront.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Urban Hotel in Calgary",
    location: "Calgary, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Calgary offering modern accommodations, city views, and proximity to cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Lakefront Resort in Muskoka",
    location: "Muskoka, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Lakefront resort in Muskoka offering serene accommodations, water activities, and access to beautiful lakes and forests.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Mountain Lodge in Canmore",
    location: "Canmore, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain lodge in Canmore offering rustic accommodations, breathtaking views of the Canadian Rockies, and outdoor activities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Coastal Hotel in St. John's",
    location: "St. John's, Newfoundland and Labrador",
    country: "Canada",
    starRating: 3,
    description: "Coastal hotel in St. John's offering comfortable accommodations, coastal views, and access to historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Urban Boutique Hotel in Edmonton",
    location: "Edmonton, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Edmonton offering stylish accommodations, cultural attractions, and proximity to urban parks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Charming Inn in Halifax",
    location: "Halifax, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Charming inn in Halifax offering cozy accommodations, maritime charm, and access to historic waterfront and seafood restaurants.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Luxury Resort in Whistler",
    location: "Whistler, British Columbia",
    country: "Canada",
    starRating: 5,
    description: "Luxury resort in Whistler offering premium accommodations, ski-in/ski-out access, and stunning mountain views.",
    price: {
      min: 600,
      max: 1200
    },
    image: "mountain"
  },
  {
    name: "Urban Hotel in Vancouver",
    location: "Vancouver, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Vancouver offering modern accommodations, city views, and proximity to downtown attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Charming Inn in Quebec City",
    location: "Quebec City, Quebec",
    country: "Canada",
    starRating: 3,
    description: "Charming inn in Quebec City offering cozy accommodations, historic charm, and access to Old Quebec.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Coastal Resort in Halifax",
    location: "Halifax, Nova Scotia",
    country: "Canada",
    starRating: 4,
    description: "Coastal resort in Halifax offering elegant accommodations, ocean views, and access to historic waterfront.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Mountain Lodge in Banff",
    location: "Banff, Alberta",
    country: "Canada",
    starRating: 5,
    description: "Mountain lodge in Banff offering luxurious accommodations, breathtaking views, and outdoor adventure activities.",
    price: {
      min: 600,
      max: 1200
    },
    image: "mountain"
  },
  {
    name: "Downtown Hotel in Toronto",
    location: "Toronto, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Downtown hotel in Toronto offering modern accommodations, city views, and proximity to major attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Lakefront Resort in Kelowna",
    location: "Kelowna, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Lakefront resort in Kelowna offering serene accommodations, vineyard tours, and access to Okanagan Lake.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Urban Retreat in Montreal",
    location: "Montreal, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Urban retreat in Montreal offering stylish accommodations, vibrant nightlife, and cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Cozy Cabin in Jasper",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 3,
    description: "Cozy cabin in Jasper offering rustic accommodations, mountain views, and access to Jasper National Park.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Charming B&B in Niagara-on-the-Lake",
    location: "Niagara-on-the-Lake, Ontario",
    country: "Canada",
    starRating: 3,
    description: "Charming B&B in Niagara-on-the-Lake offering cozy accommodations, wine tasting tours, and scenic views.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Urban Hotel in Ottawa",
    location: "Ottawa, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Ottawa offering modern accommodations, city views, and proximity to Parliament Hill.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Lakefront Hotel in Kelowna",
    location: "Kelowna, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Lakefront hotel in Kelowna offering serene accommodations, vineyard tours, and access to Okanagan Lake.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Urban Boutique Hotel in Winnipeg",
    location: "Winnipeg, Manitoba",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Winnipeg offering stylish accommodations, cultural attractions, and proximity to The Forks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Coastal Hotel in St. John's",
    location: "St. John's, Newfoundland and Labrador",
    country: "Canada",
    starRating: 3,
    description: "Coastal hotel in St. John's offering comfortable accommodations, coastal views, and access to historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Urban Boutique Hotel in Edmonton",
    location: "Edmonton, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Edmonton offering stylish accommodations, cultural attractions, and proximity to urban parks.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Charming Inn in Halifax",
    location: "Halifax, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Charming inn in Halifax offering cozy accommodations, maritime charm, and access to historic waterfront and seafood restaurants.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Luxury Hotel in Toronto",
    location: "Toronto, Ontario",
    country: "Canada",
    starRating: 5,
    description: "Luxury hotel in Toronto offering sophisticated accommodations, fine dining, and stunning city views.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Beach Resort in Tofino",
    location: "Tofino, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Beach resort in Tofino offering beachfront accommodations, stunning ocean views, and surfing opportunities.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Jasper",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain lodge in Jasper offering rustic accommodations, breathtaking mountain views, and access to outdoor activities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Rustic Lodge in Algonquin Park",
    location: "Algonquin Park, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Rustic lodge in Algonquin Park offering cozy accommodations, outdoor activities, and scenic views.",
    price: {
      min: 300,
      max: 600
    },
    image: "forest"
  },
  {
    name: "Urban Hotel in Edmonton",
    location: "Edmonton, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Edmonton offering modern accommodations, city views, and proximity to shopping and dining.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Beachfront Hotel in Cavendish",
    location: "Cavendish, Prince Edward Island",
    country: "Canada",
    starRating: 3,
    description: "Beachfront hotel in Cavendish offering cozy accommodations, ocean views, and access to beautiful beaches.",
    price: {
      min: 200,
      max: 400
    },
    image: "beach"
  },
  {
    name: "Historic Hotel in Victoria",
    location: "Victoria, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Historic hotel in Victoria offering charming accommodations, historic architecture, and proximity to downtown.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Luxury Ski Resort in Whistler",
    location: "Whistler, British Columbia",
    country: "Canada",
    starRating: 5,
    description: "Luxury ski resort in Whistler offering upscale accommodations, ski-in/ski-out access, and stunning mountain views.",
    price: {
      min: 700,
      max: 1400
    },
    image: "mountain"
  },
  {
    name: "Seaside Inn in Lunenburg",
    location: "Lunenburg, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Seaside inn in Lunenburg offering quaint accommodations, ocean views, and a historic setting.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Urban Hotel in Calgary",
    location: "Calgary, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Calgary offering contemporary accommodations, city views, and proximity to major attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Revelstoke",
    location: "Revelstoke, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Mountain retreat in Revelstoke offering cozy accommodations, mountain views, and outdoor adventure activities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Boutique Hotel in Charlottetown",
    location: "Charlottetown, Prince Edward Island",
    country: "Canada",
    starRating: 3,
    description: "Boutique hotel in Charlottetown offering stylish accommodations, historic charm, and proximity to downtown.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Lakefront Cabin in Ontario",
    location: "Ontario, Canada",
    country: "Canada",
    starRating: 3,
    description: "Charming lakefront cabin in Ontario offering cozy accommodations, beautiful lake views, and access to fishing and boating.",
    price: {
      min: 200,
      max: 400
    },
    image: "lake"
  },
  {
    name: "Secluded Chalet in Quebec",
    location: "Quebec, Canada",
    country: "Canada",
    starRating: 4,
    description: "Secluded chalet in Quebec offering rustic accommodations, forest views, and a tranquil escape from city life.",
    price: {
      min: 300,
      max: 600
    },
    image: "forest"
  },
  {
    name: "Riverside Lodge in Yukon",
    location: "Yukon, Canada",
    country: "Canada",
    starRating: 3,
    description: "Riverside lodge in Yukon offering comfortable accommodations, wilderness surroundings, and access to outdoor adventures.",
    price: {
      min: 250,
      max: 500
    },
    image: "river"
  },
  {
    name: "Boutique Hotel in Nova Scotia",
    location: "Nova Scotia, Canada",
    country: "Canada",
    starRating: 4,
    description: "Boutique hotel in Nova Scotia offering stylish accommodations, coastal charm, and a personalized experience.",
    price: {
      min: 350,
      max: 700
    },
    image: "coast"
  },
  {
    name: "Mountain Retreat in Alberta",
    location: "Alberta, Canada",
    country: "Canada",
    starRating: 3,
    description: "Mountain retreat in Alberta offering alpine accommodations, stunning mountain views, and access to hiking trails.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Ski Resort in British Columbia",
    location: "British Columbia, Canada",
    country: "Canada",
    starRating: 4,
    description: "Ski resort in British Columbia offering luxury accommodations, world-class skiing, and après-ski entertainment.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Beachfront Cottage in Newfoundland",
    location: "Newfoundland, Canada",
    country: "Canada",
    starRating: 3,
    description: "Beachfront cottage in Newfoundland offering cozy accommodations, panoramic ocean views, and a peaceful coastal retreat.",
    price: {
      min: 200,
      max: 400
    },
    image: "beach"
  },
  {
    name: "Urban Loft in Saskatchewan",
    location: "Saskatchewan, Canada",
    country: "Canada",
    starRating: 4,
    description: "Urban loft in Saskatchewan offering modern accommodations, city skyline views, and proximity to cultural attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Lakeside Resort in Manitoba",
    location: "Manitoba, Canada",
    country: "Canada",
    starRating: 4,
    description: "Lakeside resort in Manitoba offering upscale accommodations, water activities, and relaxation in a natural setting.",
    price: {
      min: 350,
      max: 700
    },
    image: "lake"
  },
  {
    name: "Historic Inn in Prince Edward Island",
    location: "Prince Edward Island, Canada",
    country: "Canada",
    starRating: 3,
    description: "Historic inn in Prince Edward Island offering charming accommodations, Victorian-era charm, and a warm island welcome.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Lakefront Resort in Muskoka",
    location: "Muskoka, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Lakefront resort in Muskoka offering serene accommodations, water activities, and access to beautiful lakes and forests.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "Downtown Hotel in Saskatoon",
    location: "Saskatoon, Saskatchewan",
    country: "Canada",
    starRating: 3,
    description: "Downtown hotel in Saskatoon offering comfortable accommodations, city views, and proximity to attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Mountain Lodge in Fernie",
    location: "Fernie, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Mountain lodge in Fernie offering rustic accommodations, scenic views, and outdoor activities.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Historic Inn in Kingston",
    location: "Kingston, Ontario",
    country: "Canada",
    starRating: 3,
    description: "Historic inn in Kingston offering charming accommodations, historic ambiance, and proximity to the waterfront.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Beach Resort in Parlee Beach",
    location: "Parlee Beach, New Brunswick",
    country: "Canada",
    starRating: 4,
    description: "Beach resort in Parlee Beach offering beachfront accommodations, ocean views, and water activities.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Cabin in Golden",
    location: "Golden, British Columbia",
    country: "Canada",
    starRating: 3,
    description: "Mountain cabin in Golden offering rustic accommodations, scenic views, and proximity to outdoor adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Urban Hotel in Winnipeg",
    location: "Winnipeg, Manitoba",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Winnipeg offering modern accommodations, city views, and proximity to cultural attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Coastal Resort in Charlottetown",
    location: "Charlottetown, Prince Edward Island",
    country: "Canada",
    starRating: 4,
    description: "Coastal resort in Charlottetown offering elegant accommodations, ocean views, and proximity to historic sites.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Luxury Hotel in Vancouver",
    location: "Vancouver, British Columbia",
    country: "Canada",
    starRating: 5,
    description: "Luxury hotel in Vancouver offering upscale accommodations, city views, and proximity to major attractions.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Seaside Inn in Peggy's Cove",
    location: "Peggy's Cove, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Seaside inn in Peggy's Cove offering cozy accommodations, ocean views, and access to the famous lighthouse.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Mountain Retreat in Blue Mountains",
    location: "Blue Mountains, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Mountain retreat in Blue Mountains offering luxurious accommodations, ski-in/ski-out access, and scenic views.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Cozy Lodge in Mont-Tremblant",
    location: "Mont-Tremblant, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Cozy lodge in Mont-Tremblant offering comfortable accommodations, mountain views, and proximity to ski slopes.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Urban Boutique Hotel in Regina",
    location: "Regina, Saskatchewan",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Regina offering stylish accommodations, city views, and proximity to cultural attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Seaside Resort in Tofino",
    location: "Tofino, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Seaside resort in Tofino offering beachfront accommodations, ocean views, and access to surfing.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Historic Hotel in Charlottetown",
    location: "Charlottetown, Prince Edward Island",
    country: "Canada",
    starRating: 3,
    description: "Historic hotel in Charlottetown offering charming accommodations, historic charm, and proximity to downtown.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Mountain Resort in Lake Louise",
    location: "Lake Louise, Alberta",
    country: "Canada",
    starRating: 5,
    description: "Mountain resort in Lake Louise offering luxurious accommodations, breathtaking views, and outdoor activities.",
    price: {
      min: 600,
      max: 1200
    },
    image: "mountain"
  },
  {
    name: "Beach Hotel in White Rock",
    location: "White Rock, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Beach hotel in White Rock offering comfortable accommodations, ocean views, and proximity to the beach.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "Urban Hotel in Hamilton",
    location: "Hamilton, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Urban hotel in Hamilton offering modern accommodations, city views, and proximity to local attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Riverside Lodge in Jasper",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Riverside lodge in Jasper offering cozy accommodations, scenic views, and access to outdoor activities.",
    price: {
      min: 300,
      max: 600
    },
    image: "river"
  },
  {
    name: "Coastal Inn in St. Andrews",
    location: "St. Andrews, New Brunswick",
    country: "Canada",
    starRating: 3,
    description: "Coastal inn in St. Andrews offering comfortable accommodations, ocean views, and a historic setting.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Mountain Lodge in Canmore",
    location: "Canmore, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain lodge in Canmore offering rustic accommodations, mountain views, and outdoor activities.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Urban Boutique Hotel in Kelowna",
    location: "Kelowna, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Kelowna offering stylish accommodations, city views, and proximity to vineyards.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Seaside Resort in Summerside",
    location: "Summerside, Prince Edward Island",
    country: "Canada",
    starRating: 4,
    description: "Seaside resort in Summerside offering comfortable accommodations, ocean views, and access to local attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Luxury Hotel in Montreal",
    location: "Montreal, Quebec",
    country: "Canada",
    starRating: 5,
    description: "Luxury hotel in Montreal offering upscale accommodations, fine dining, and city views.",
    price: {
      min: 600,
      max: 1200
    },
    image: "city"
  },
  {
    name: "Historic Inn in Quebec City",
    location: "Quebec City, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Historic inn in Quebec City offering charming accommodations, historic charm, and proximity to Old Quebec.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Beachfront Resort in Shediac",
    location: "Shediac, New Brunswick",
    country: "Canada",
    starRating: 4,
    description: "Beachfront resort in Shediac offering comfortable accommodations, ocean views, and access to Parlee Beach.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "Mountain Cabin in Nelson",
    location: "Nelson, British Columbia",
    country: "Canada",
    starRating: 3,
    description: "Mountain cabin in Nelson offering rustic accommodations, scenic views, and access to outdoor adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Urban Retreat in Halifax",
    location: "Halifax, Nova Scotia",
    country: "Canada",
    starRating: 4,
    description: "Urban retreat in Halifax offering modern accommodations, city views, and proximity to the waterfront.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Luxury Resort in Banff",
    location: "Banff, Alberta",
    country: "Canada",
    starRating: 5,
    description: "Luxury resort in Banff offering upscale accommodations, breathtaking views, and outdoor activities.",
    price: {
      min: 700,
      max: 1400
    },
    image: "mountain"
  },
  {
    name: "Seaside Hotel in Victoria",
    location: "Victoria, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Seaside hotel in Victoria offering charming accommodations, ocean views, and proximity to downtown.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Boutique Hotel in Ottawa",
    location: "Ottawa, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Boutique hotel in Ottawa offering stylish accommodations, city views, and proximity to Parliament Hill.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Lakeside Cabin in Banff National Park",
    location: "Banff, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Rustic lakeside cabin in Banff National Park offering cozy accommodations, stunning mountain views, and access to outdoor activities.",
    price: {
      min: 250,
      max: 500
    },
    image: "lake"
  },
  {
    name: "Downtown Hotel in Toronto",
    location: "Toronto, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Downtown hotel in Toronto offering modern accommodations, city skyline views, and proximity to attractions and entertainment.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Cozy Lodge in Whistler",
    location: "Whistler, British Columbia",
    country: "Canada",
    starRating: 3,
    description: "Cozy lodge in Whistler offering comfortable accommodations, mountain lodge charm, and easy access to skiing and hiking.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Seaside Cottage in Prince Edward Island",
    location: "Prince Edward Island, Canada",
    country: "Canada",
    starRating: 3,
    description: "Charming seaside cottage in Prince Edward Island offering quaint accommodations, ocean breezes, and coastal relaxation.",
    price: {
      min: 150,
      max: 300
    },
    image: "beach"
  },
  {
    name: "Historic Inn in Quebec City",
    location: "Quebec City, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Historic inn in Quebec City offering elegant accommodations, old-world charm, and a central location in the historic district.",
    price: {
      min: 350,
      max: 700
    },
    image: "old-town"
  },
  {
    name: "Urban Loft in Vancouver",
    location: "Vancouver, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Urban loft in Vancouver offering stylish accommodations, urban chic decor, and city views from the heart of downtown.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Mountain Chalet in Jasper National Park",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Mountain chalet in Jasper National Park offering alpine accommodations, breathtaking views, and access to hiking trails.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Riverside Retreat in Ottawa",
    location: "Ottawa, Ontario",
    country: "Canada",
    starRating: 3,
    description: "Riverside retreat in Ottawa offering serene accommodations, river views, and a peaceful escape from city life.",
    price: {
      min: 200,
      max: 400
    },
    image: "river"
  },
  {
    name: "Ski Lodge in Mont Tremblant",
    location: "Mont Tremblant, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Ski lodge in Mont Tremblant offering cozy accommodations, ski-in/ski-out access, and après-ski relaxation.",
    price: {
      min: 350,
      max: 700
    },
    image: "mountain"
  },
  {
    name: "Urban Boutique Hotel in Halifax",
    location: "Halifax, Nova Scotia",
    country: "Canada",
    starRating: 4,
    description: "Urban boutique hotel in Halifax offering stylish accommodations, maritime charm, and a central location near waterfront attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Coastal Retreat in Tofino",
    location: "Tofino, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Coastal retreat in Tofino offering cozy accommodations, oceanfront views, and access to surfing and whale watching.",
    price: {
      min: 350,
      max: 700
    },
    image: "beach"
  },
  {
    name: "Rustic Cabin in Algonquin Provincial Park",
    location: "Algonquin Provincial Park, Ontario",
    country: "Canada",
    starRating: 3,
    description: "Rustic cabin in Algonquin Provincial Park offering wilderness accommodations, tranquil surroundings, and outdoor adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "forest"
  },
  {
    name: "Historic Bed and Breakfast in Lunenburg",
    location: "Lunenburg, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Historic bed and breakfast in Lunenburg offering charming accommodations, maritime heritage, and a warm welcome.",
    price: {
      min: 150,
      max: 300
    },
    image: "old-town"
  },
  {
    name: "Ski Resort in Whistler",
    location: "Whistler, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Ski resort in Whistler offering luxury accommodations, world-class skiing, and après-ski amenities.",
    price: {
      min: 500,
      max: 1000
    },
    image: "mountain"
  },
  {
    name: "Seaside Hotel in Victoria",
    location: "Victoria, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Seaside hotel in Victoria offering elegant accommodations, harbor views, and proximity to historic attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Boutique Inn in Niagara-on-the-Lake",
    location: "Niagara-on-the-Lake, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Boutique inn in Niagara-on-the-Lake offering romantic accommodations, vineyard views, and wine country charm.",
    price: {
      min: 300,
      max: 600
    },
    image: "vineyard"
  },
  {
    name: "Urban Apartment in Montreal",
    location: "Montreal, Quebec",
    country: "Canada",
    starRating: 4,
    description: "Urban apartment in Montreal offering stylish accommodations, cosmopolitan living, and cultural experiences.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Historic Lodge in Churchill",
    location: "Churchill, Manitoba",
    country: "Canada",
    starRating: 3,
    description: "Historic lodge in Churchill offering cozy accommodations, northern hospitality, and wildlife viewing opportunities.",
    price: {
      min: 250,
      max: 500
    },
    image: "nature"
  },
  {
    name: "Lakefront Resort in Muskoka",
    location: "Muskoka, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Lakefront resort in Muskoka offering upscale accommodations, water activities, and relaxation in cottage country.",
    price: {
      min: 400,
      max: 800
    },
    image: "lake"
  },
  {
    name: "B&B in St. John's",
    location: "St. John's, Newfoundland and Labrador",
    country: "Canada",
    starRating: 3,
    description: "Bed and breakfast in St. John's offering comfortable accommodations, East Coast hospitality, and scenic views.",
    price: {
      min: 200,
      max: 400
    },
    image: "coast"
  },
  {
    name: "Ski Chalet in Banff",
    location: "Banff, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Ski chalet in Banff offering cozy accommodations, mountain views, and access to world-class skiing.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Waterfront Cottage in Muskoka",
    location: "Muskoka, Ontario",
    country: "Canada",
    starRating: 3,
    description: "Waterfront cottage in Muskoka offering rustic accommodations, lake views, and relaxation in cottage country.",
    price: {
      min: 300,
      max: 600
    },
    image: "lake"
  },
  {
    name: "Historic Inn in Charlottetown",
    location: "Charlottetown, Prince Edward Island",
    country: "Canada",
    starRating: 3,
    description: "Historic inn in Charlottetown offering charming accommodations, Victorian-era charm, and maritime hospitality.",
    price: {
      min: 200,
      max: 400
    },
    image: "old-town"
  },
  {
    name: "Seaside Resort in Cape Breton",
    location: "Cape Breton, Nova Scotia",
    country: "Canada",
    starRating: 4,
    description: "Seaside resort in Cape Breton offering luxury accommodations, ocean views, and access to scenic drives and hiking trails.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Mountain Retreat in Revelstoke",
    location: "Revelstoke, British Columbia",
    country: "Canada",
    starRating: 3,
    description: "Mountain retreat in Revelstoke offering alpine accommodations, mountain adventures, and relaxation in nature.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Urban Loft in Ottawa",
    location: "Ottawa, Ontario",
    country: "Canada",
    starRating: 4,
    description: "Urban loft in Ottawa offering modern accommodations, city views, and proximity to cultural attractions.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Riverside Cabin in Jasper",
    location: "Jasper, Alberta",
    country: "Canada",
    starRating: 3,
    description: "Riverside cabin in Jasper offering cozy accommodations, tranquil surroundings, and access to outdoor adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "river"
  },
  {
    name: "Coastal Inn in Lunenburg",
    location: "Lunenburg, Nova Scotia",
    country: "Canada",
    starRating: 3,
    description: "Coastal inn in Lunenburg offering comfortable accommodations, maritime heritage, and a warm welcome.",
    price: {
      min: 150,
      max: 300
    },
    image: "coast"
  },
  {
    name: "Ski Lodge in Fernie",
    location: "Fernie, British Columbia",
    country: "Canada",
    starRating: 4,
    description: "Ski lodge in Fernie offering ski-in/ski-out accommodations, mountain views, and après-ski relaxation.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Downtown Apartment in Calgary",
    location: "Calgary, Alberta",
    country: "Canada",
    starRating: 4,
    description: "Downtown apartment in Calgary offering modern living, city skyline views, and proximity to dining and entertainment.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  }

];

console.log(canadaHotels);

//Australia
const australiaHotels = [
  {
    name: "Beachfront Resort in Gold Coast",
    location: "Gold Coast, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Beachfront resort in Gold Coast offering luxurious accommodations, stunning ocean views, and access to pristine beaches.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Urban Hotel in Sydney CBD",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Urban hotel in Sydney CBD offering modern accommodations, city skyline views, and proximity to major attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Seaside Resort in Byron Bay",
    location: "Byron Bay, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Seaside resort in Byron Bay offering stylish accommodations, relaxed beach vibes, and access to surfing spots.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Blue Mountains",
    location: "Blue Mountains, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Mountain lodge in Blue Mountains offering cozy accommodations, tranquil forest views, and access to hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Luxury Resort in Whitsunday Islands",
    location: "Whitsunday Islands, Queensland",
    country: "Australia",
    starRating: 5,
    description: "Luxury resort in Whitsunday Islands offering exclusive accommodations, private beaches, and world-class snorkeling.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Melbourne CBD",
    location: "Melbourne, Victoria",
    country: "Australia",
    starRating: 4,
    description: "Boutique hotel in Melbourne CBD offering chic accommodations, trendy vibes, and proximity to cafes and galleries.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Riverside Retreat in Brisbane",
    location: "Brisbane, Queensland",
    country: "Australia",
    starRating: 3,
    description: "Riverside retreat in Brisbane offering comfortable accommodations, river views, and access to waterfront dining.",
    price: {
      min: 200,
      max: 400
    },
    image: "river"
  },
  {
    name: "Coastal Inn in Port Douglas",
    location: "Port Douglas, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Coastal inn in Port Douglas offering cozy accommodations, tropical garden views, and proximity to the Great Barrier Reef.",
    price: {
      min: 300,
      max: 600
    },
    image: "coast"
  },
  {
    name: "Mountain Retreat in Mount Kosciuszko",
    location: "Mount Kosciuszko, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Mountain retreat in Mount Kosciuszko offering rustic accommodations, alpine scenery, and access to skiing and hiking.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Urban Boutique Hotel in Adelaide",
    location: "Adelaide, South Australia",
    country: "Australia",
    starRating: 4,
    description: "Urban boutique hotel in Adelaide offering stylish accommodations, vibrant city vibes, and proximity to parks and museums.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Island Resort in Hamilton Island",
    location: "Hamilton Island, Queensland",
    country: "Australia",
    starRating: 5,
    description: "Island resort in Hamilton Island offering luxurious accommodations, private beach access, and stunning views of the Coral Sea.",
    price: {
      min: 600,
      max: 1200
    },
    image: "island"
  },
  {
    name: "Rural Retreat in Margaret River",
    location: "Margaret River, Western Australia",
    country: "Australia",
    starRating: 4,
    description: "Rural retreat in Margaret River offering tranquil accommodations, vineyard views, and access to wine tasting tours.",
    price: {
      min: 400,
      max: 800
    },
    image: "countryside"
  },
  {
    name: "Desert Oasis in Alice Springs",
    location: "Alice Springs, Northern Territory",
    country: "Australia",
    starRating: 3,
    description: "Desert oasis in Alice Springs offering comfortable accommodations, red desert views, and proximity to outback adventures.",
    price: {
      min: 200,
      max: 400
    },
    image: "desert"
  },
  {
    name: "Coastal Resort in Noosa",
    location: "Noosa, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Coastal resort in Noosa offering upscale accommodations, beachfront dining, and access to Noosa National Park.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Urban Hotel in Perth CBD",
    location: "Perth, Western Australia",
    country: "Australia",
    starRating: 4,
    description: "Urban hotel in Perth CBD offering contemporary accommodations, river views, and proximity to nightlife.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Beachside Resort in Cairns",
    location: "Cairns, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Beachside resort in Cairns offering tropical accommodations, oceanfront dining, and access to the Great Barrier Reef.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Wine Country Retreat in Hunter Valley",
    location: "Hunter Valley, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Wine country retreat in Hunter Valley offering luxurious accommodations, vineyard tours, and gourmet dining experiences.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Urban Boutique Hotel in Surfers Paradise",
    location: "Surfers Paradise, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Urban boutique hotel in Surfers Paradise offering stylish accommodations, city skyline views, and proximity to the beach.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Riverside Resort in Brisbane",
    location: "Brisbane, Queensland",
    country: "Australia",
    starRating: 3,
    description: "Riverside resort in Brisbane offering comfortable accommodations, river views, and access to nearby attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "river"
  },
  {
    name: "Coastal Retreat in Byron Bay",
    location: "Byron Bay, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Coastal retreat in Byron Bay offering relaxed accommodations, beachside atmosphere, and proximity to surf spots.",
    price: {
      min: 200,
      max: 400
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Thredbo",
    location: "Thredbo, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Mountain lodge in Thredbo offering cozy accommodations, alpine views, and access to skiing and hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Beachside Resort in Port Douglas",
    location: "Port Douglas, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Beachside resort in Port Douglas offering luxurious accommodations, tropical surroundings, and access to the Great Barrier Reef.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Historic Inn in Hobart",
    location: "Hobart, Tasmania",
    country: "Australia",
    starRating: 3,
    description: "Historic inn in Hobart offering charming accommodations, heritage ambiance, and proximity to the waterfront.",
    price: {
      min: 200,
      max: 400
    },
    image: "historic"
  },
  {
    name: "Coastal Resort in Sunshine Coast",
    location: "Sunshine Coast, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Coastal resort in Sunshine Coast offering upscale accommodations, stunning ocean views, and access to nearby attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "coast"
  },
  {
    name: "Boutique Hotel in Fremantle",
    location: "Fremantle, Western Australia",
    country: "Australia",
    starRating: 4,
    description: "Boutique hotel in Fremantle offering stylish accommodations, eclectic atmosphere, and proximity to cafes and markets.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Mountain Retreat in Mount Buller",
    location: "Mount Buller, Victoria",
    country: "Australia",
    starRating: 3,
    description: "Mountain retreat in Mount Buller offering cozy accommodations, alpine charm, and access to skiing and snowboarding.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Seaside Resort in Palm Cove",
    location: "Palm Cove, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Seaside resort in Palm Cove offering luxurious accommodations, serene beachfront setting, and pampering amenities.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Luxury Hotel in Sydney Harbour",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 5,
    description: "Luxury hotel in Sydney Harbour offering opulent accommodations, panoramic views of the Opera House, and fine dining experiences.",
    price: {
      min: 600,
      max: 1200
    },
    image: "harbor"
  },
  {
    name: "Urban Chic Hotel in Sydney CBD",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Urban chic hotel in Sydney CBD offering stylish accommodations, vibrant city vibes, and proximity to major attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Riverside Retreat in Canberra",
    location: "Canberra, Australian Capital Territory",
    country: "Australia",
    starRating: 4,
    description: "Riverside retreat in Canberra offering tranquil accommodations, scenic views of Lake Burley Griffin, and access to cultural landmarks.",
    price: {
      min: 400,
      max: 800
    },
    image: "river"
  },
  {
    name: "Boutique Hotel in Canberra CBD",
    location: "Canberra, Australian Capital Territory",
    country: "Australia",
    starRating: 4,
    description: "Boutique hotel in Canberra CBD offering intimate accommodations, contemporary design, and proximity to government buildings.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Harbour View Hotel in Sydney",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Harbour view hotel in Sydney offering comfortable accommodations, stunning views of the Harbour Bridge, and waterfront dining options.",
    price: {
      min: 400,
      max: 800
    },
    image: "harbor"
  },
  {
    name: "City Center Hotel in Canberra",
    location: "Canberra, Australian Capital Territory",
    country: "Australia",
    starRating: 3,
    description: "City center hotel in Canberra offering convenient accommodations, easy access to attractions, and a vibrant urban atmosphere.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Waterfront Resort in Sydney",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Waterfront resort in Sydney offering luxurious accommodations, direct access to the waterfront promenade, and breathtaking views of the skyline.",
    price: {
      min: 500,
      max: 1000
    },
    image: "waterfront"
  },
  {
    name: "Modern Boutique Hotel in Canberra",
    location: "Canberra, Australian Capital Territory",
    country: "Australia",
    starRating: 4,
    description: "Modern boutique hotel in Canberra offering stylish accommodations, innovative design, and personalized service.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Beachfront Resort in Sydney",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Beachfront resort in Sydney offering upscale accommodations, direct access to Bondi Beach, and panoramic ocean views.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Canal View Hotel in Canberra",
    location: "Canberra, Australian Capital Territory",
    country: "Australia",
    starRating: 3,
    description: "Canal view hotel in Canberra offering comfortable accommodations, scenic views of the nearby waterways, and a peaceful ambiance.",
    price: {
      min: 200,
      max: 400
    },
    image: "canal"
  },
  {
    name: "Seaside Resort in Cairns",
    location: "Cairns, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Seaside resort in Cairns offering luxurious accommodations, tropical surroundings, and access to the Great Barrier Reef.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Retreat in Mount Kosciuszko",
    location: "Mount Kosciuszko, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Mountain retreat in Mount Kosciuszko offering cozy accommodations, alpine scenery, and access to hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "City Center Hotel in Melbourne",
    location: "Melbourne, Victoria",
    country: "Australia",
    starRating: 4,
    description: "City center hotel in Melbourne offering modern accommodations, cultural experiences, and proximity to dining and shopping.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Beachfront Resort in Gold Coast",
    location: "Gold Coast, Queensland",
    country: "Australia",
    starRating: 5,
    description: "Beachfront resort in Gold Coast offering luxurious accommodations, stunning ocean views, and access to pristine beaches.",
    price: {
      min: 600,
      max: 1200
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Adelaide CBD",
    location: "Adelaide, South Australia",
    country: "Australia",
    starRating: 4,
    description: "Boutique hotel in Adelaide CBD offering stylish accommodations, eclectic design, and proximity to cultural attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Coastal Retreat in Byron Bay",
    location: "Byron Bay, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Coastal retreat in Byron Bay offering relaxed accommodations, beachside atmosphere, and access to surf spots.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Blue Mountains",
    location: "Blue Mountains, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Mountain lodge in Blue Mountains offering cozy accommodations, tranquil forest views, and access to hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Luxury Resort in Whitsunday Islands",
    location: "Whitsunday Islands, Queensland",
    country: "Australia",
    starRating: 5,
    description: "Luxury resort in Whitsunday Islands offering exclusive accommodations, private beaches, and world-class snorkeling.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Urban Boutique Hotel in Perth",
    location: "Perth, Western Australia",
    country: "Australia",
    starRating: 4,
    description: "Urban boutique hotel in Perth offering stylish accommodations, vibrant city vibes, and proximity to attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Rainforest Retreat in Daintree",
    location: "Daintree, Queensland",
    country: "Australia",
    starRating: 3,
    description: "Rainforest retreat in Daintree offering eco-friendly accommodations, lush surroundings, and wildlife experiences.",
    price: {
      min: 300,
      max: 600
    },
    image: "rainforest"
  },
  {
    name: "Modern Hotel in Sydney CBD",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Modern hotel in Sydney CBD offering comfortable accommodations, city views, and convenient access to attractions.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Coastal Resort in Port Douglas",
    location: "Port Douglas, Queensland",
    country: "Australia",
    starRating: 5,
    description: "Coastal resort in Port Douglas offering luxurious accommodations, private beach access, and tropical surroundings.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Boutique Hotel in Melbourne",
    location: "Melbourne, Victoria",
    country: "Australia",
    starRating: 4,
    description: "Boutique hotel in Melbourne offering stylish accommodations, unique design, and personalized service.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Mountain Lodge in Thredbo",
    location: "Thredbo, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Mountain lodge in Thredbo offering cozy accommodations, alpine views, and access to skiing and hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  },
  {
    name: "Beachfront Hotel in Surfers Paradise",
    location: "Surfers Paradise, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Beachfront hotel in Surfers Paradise offering upscale accommodations, ocean views, and proximity to entertainment.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  // Apartments
  {
    name: "Modern Apartment in Brisbane CBD",
    location: "Brisbane, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Modern apartment in Brisbane CBD offering spacious living, city skyline views, and self-catering facilities.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Beachfront Apartment in Bondi Beach",
    location: "Bondi Beach, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Beachfront apartment in Bondi Beach offering contemporary living, panoramic ocean views, and access to surf and sand.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Riverside Apartment in Perth",
    location: "Perth, Western Australia",
    country: "Australia",
    starRating: 3,
    description: "Riverside apartment in Perth offering comfortable living, river views, and proximity to parks and cafes.",
    price: {
      min: 250,
      max: 500
    },
    image: "river"
  },
  {
    name: "City View Apartment in Melbourne",
    location: "Melbourne, Victoria",
    country: "Australia",
    starRating: 4,
    description: "City view apartment in Melbourne offering modern amenities, skyline views, and access to dining and shopping.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Seaside Apartment in Noosa",
    location: "Noosa, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Seaside apartment in Noosa offering relaxed beach living, ocean breezes, and proximity to restaurants and shops.",
    price: {
      min: 450,
      max: 900
    },
    image: "beach"
  },
  {
    name: "Luxury Resort in Gold Coast",
    location: "Gold Coast, Queensland",
    country: "Australia",
    starRating: 5,
    description: "Luxury resort in Gold Coast offering opulent accommodations, private beach access, and world-class amenities.",
    price: {
      min: 800,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Mountain Lodge in Blue Mountains",
    location: "Blue Mountains, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Mountain lodge in Blue Mountains offering cozy accommodations, breathtaking views, and access to nature trails.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Beachfront Apartment in Surfers Paradise",
    location: "Surfers Paradise, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Beachfront apartment in Surfers Paradise offering modern living, panoramic ocean views, and proximity to entertainment.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Urban Hotel in Sydney CBD",
    location: "Sydney, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Urban hotel in Sydney CBD offering comfortable accommodations, city skyline views, and easy access to attractions.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Seaside Resort in Byron Bay",
    location: "Byron Bay, New South Wales",
    country: "Australia",
    starRating: 4,
    description: "Seaside resort in Byron Bay offering relaxed accommodations, beachfront access, and laid-back coastal vibes.",
    price: {
      min: 600,
      max: 1200
    },
    image: "beach"
  },
  {
    name: "City View Apartment in Melbourne",
    location: "Melbourne, Victoria",
    country: "Australia",
    starRating: 4,
    description: "City view apartment in Melbourne offering modern amenities, skyline views, and proximity to dining and entertainment.",
    price: {
      min: 350,
      max: 700
    },
    image: "city"
  },
  {
    name: "Riverside Lodge in Perth",
    location: "Perth, Western Australia",
    country: "Australia",
    starRating: 3,
    description: "Riverside lodge in Perth offering comfortable accommodations, tranquil surroundings, and access to river activities.",
    price: {
      min: 250,
      max: 500
    },
    image: "river"
  },
  {
    name: "Boutique Hotel in Adelaide CBD",
    location: "Adelaide, South Australia",
    country: "Australia",
    starRating: 4,
    description: "Boutique hotel in Adelaide CBD offering stylish accommodations, personalized service, and a central location.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Beachfront Apartment in Noosa",
    location: "Noosa, Queensland",
    country: "Australia",
    starRating: 4,
    description: "Beachfront apartment in Noosa offering coastal living, stunning views, and access to water activities.",
    price: {
      min: 450,
      max: 900
    },
    image: "beach"
  },
  {
    name: "Mountain Retreat in Mount Kosciuszko",
    location: "Mount Kosciuszko, New South Wales",
    country: "Australia",
    starRating: 3,
    description: "Mountain retreat in Mount Kosciuszko offering cozy accommodations, alpine scenery, and access to hiking trails.",
    price: {
      min: 200,
      max: 400
    },
    image: "mountain"
  }
];
console.log(australiaHotels);


// Brasil
const brazilHotels = [
  {
    name: "Luxury Beach Resort in Rio de Janeiro",
    location: "Rio de Janeiro, Brazil",
    country: "Brazil",
    starRating: 5,
    description: "Luxury beach resort in Rio de Janeiro offering exclusive accommodations, stunning ocean views, and access to pristine beaches and vibrant nightlife.",
    price: {
      min: 800,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Amazon Jungle Lodge in Manaus",
    location: "Manaus, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Amazon jungle lodge in Manaus offering eco-friendly accommodations, immersive rainforest experiences, and guided wildlife tours.",
    price: {
      min: 500,
      max: 1000
    },
    image: "jungle"
  },
  {
    name: "Historic Colonial Hotel in Salvador",
    location: "Salvador, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Historic colonial hotel in Salvador offering charming accommodations, colonial architecture, and a central location near cultural landmarks and beaches.",
    price: {
      min: 300,
      max: 600
    },
    image: "colonial"
  },
  {
    name: "Tropical Resort in Florianopolis",
    location: "Florianopolis, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Tropical resort in Florianopolis offering beachfront accommodations, lush gardens, and a relaxing atmosphere near surfing spots and nature reserves.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Retreat in Campos do Jordao",
    location: "Campos do Jordao, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Mountain retreat in Campos do Jordao offering cozy accommodations, alpine scenery, and a peaceful escape near hiking trails and natural hot springs.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Urban Boutique Hotel in Sao Paulo",
    location: "Sao Paulo, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Urban boutique hotel in Sao Paulo offering stylish accommodations, city views, and a convenient location near cultural attractions and dining venues.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Beachfront Villa in Buzios",
    location: "Buzios, Brazil",
    country: "Brazil",
    starRating: 5,
    description: "Beachfront villa in Buzios offering luxurious accommodations, private beach access, and a serene escape near trendy shops and restaurants.",
    price: {
      min: 700,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Riverside Lodge in Bonito",
    location: "Bonito, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Riverside lodge in Bonito offering comfortable accommodations, river views, and access to outdoor adventures like snorkeling and cave exploration.",
    price: {
      min: 300,
      max: 600
    },
    image: "river"
  },
  {
    name: "Pantanal Ranch Retreat in Corumba",
    location: "Corumba, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Pantanal ranch retreat in Corumba offering rustic accommodations, wildlife sightings, and horseback riding excursions in the Pantanal wetlands.",
    price: {
      min: 200,
      max: 400
    },
    image: "ranch"
  },
  {
    name: "Cozy Pousada in Paraty",
    location: "Paraty, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Cozy pousada in Paraty offering comfortable accommodations, colonial charm, and a tranquil atmosphere near historic streets and pristine beaches.",
    price: {
      min: 200,
      max: 400
    },
    image: "colonial"
  },
  {
    name: "Luxury Beach Resort in Rio de Janeiro",
    location: "Rio de Janeiro, Brazil",
    country: "Brazil",
    starRating: 5,
    description: "Luxury beach resort in Rio de Janeiro offering exclusive accommodations, stunning ocean views, and access to pristine beaches and vibrant nightlife.",
    price: {
      min: 800,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Amazon Jungle Lodge in Manaus",
    location: "Manaus, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Amazon jungle lodge in Manaus offering eco-friendly accommodations, immersive rainforest experiences, and guided wildlife tours.",
    price: {
      min: 500,
      max: 1000
    },
    image: "jungle"
  },
  {
    name: "Historic Colonial House in Salvador",
    location: "Salvador, Brazil",
    country: "Brazil",
    description: "Historic colonial house in Salvador offering charming accommodations, colonial architecture, and a central location near cultural landmarks and beaches.",
    price: {
      min: 300,
      max: 600
    },
    image: "colonial"
  },
  {
    name: "Tropical Resort in Florianopolis",
    location: "Florianopolis, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Tropical resort in Florianopolis offering beachfront accommodations, lush gardens, and a relaxing atmosphere near surfing spots and nature reserves.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Mountain Cabin in Campos do Jordao",
    location: "Campos do Jordao, Brazil",
    country: "Brazil",
    description: "Mountain cabin in Campos do Jordao offering cozy accommodations, alpine scenery, and a peaceful escape near hiking trails and natural hot springs.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Coastal Villa in Fortaleza",
    location: "Fortaleza, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Coastal villa in Fortaleza offering spacious accommodations, oceanfront views, and a serene atmosphere near sandy beaches and beachside cafes.",
    price: {
      min: 400,
      max: 800
    },
    image: "beach"
  },
  {
    name: "Art Deco Hotel in Recife",
    location: "Recife, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Art Deco hotel in Recife offering stylish accommodations, historic architecture, and a vibrant atmosphere near cultural attractions and waterfront promenades.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Surf Camp in Itacare",
    location: "Itacare, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Surf camp in Itacare offering budget-friendly accommodations, surf lessons, and a laid-back vibe near world-class surfing beaches and beach bars.",
    price: {
      min: 150,
      max: 300
    },
    image: "beach"
  },
  {
    name: "Historic Mansion in Ouro Preto",
    location: "Ouro Preto, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Historic mansion in Ouro Preto offering elegant accommodations, colonial charm, and a glimpse into Brazil's rich history near UNESCO-listed landmarks and cobblestone streets.",
    price: {
      min: 250,
      max: 500
    },
    image: "colonial"
  },
  {
    name: "Beachfront Bungalow in Jericoacoara",
    location: "Jericoacoara, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Beachfront bungalow in Jericoacoara offering cozy accommodations, direct beach access, and stunning sunsets over sand dunes and turquoise waters.",
    price: {
      min: 300,
      max: 600
    },
    image: "beach"
  },
  {
    name: "Rural Retreat in Chapada Diamantina",
    location: "Chapada Diamantina, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Rural retreat in Chapada Diamantina offering peaceful accommodations, scenic views, and outdoor adventures like hiking, caving, and waterfall exploration.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Modern Apartment in Sao Luis",
    location: "Sao Luis, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Modern apartment in Sao Luis offering sleek accommodations, city views, and a convenient location near historic sites, museums, and cultural venues.",
    price: {
      min: 300,
      max: 600
    },
    image: "city"
  },
  {
    name: "Charming Pousada in Morro de Sao Paulo",
    location: "Morro de Sao Paulo, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Charming pousada in Morro de Sao Paulo offering comfortable accommodations, tropical gardens, and a tranquil setting near pristine beaches and lively nightlife.",
    price: {
      min: 200,
      max: 400
    },
    image: "beach"
  },
  {
    name: "Mountain Chalet in Itatiaia National Park",
    location: "Itatiaia National Park, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Mountain chalet in Itatiaia National Park offering cozy accommodations, mountain views, and access to hiking trails, waterfalls, and birdwatching.",
    price: {
      min: 300,
      max: 600
    },
    image: "mountain"
  },
  {
    name: "Eco-Friendly Treehouse in Paraty",
    location: "Paraty, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Eco-friendly treehouse in Paraty offering unique accommodations, forest views, and a sustainable stay near waterfalls, hiking trails, and historic sites.",
    price: {
      min: 200,
      max: 400
    },
    image: "jungle"
  },
  {
    name: "Ranch Stay in Pantanal",
    location: "Pantanal, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Ranch stay in Pantanal offering rustic accommodations, wildlife viewing opportunities, and cowboy experiences in the heart of South America's largest tropical wetland.",
    price: {
      min: 200,
      max: 400
    },
    image: "ranch"
  },
  {
    name: "Riverside Retreat in Bonito",
    location: "Bonito, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Riverside retreat in Bonito offering comfortable accommodations, river views, and access to outdoor adventures like snorkeling, kayaking, and cave exploration.",
    price: {
      min: 300,
      max: 600
    },
    image: "river"
  },
  {
    name: "Family Guesthouse in Porto Seguro",
    location: "Porto Seguro, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Family guesthouse in Porto Seguro offering cozy accommodations, family-friendly atmosphere, and a convenient location near beaches, water parks, and historic sites.",
    price: {
      min: 150,
      max: 300
    },
    image: "family"
  },
  {
    name: "Seaside Resort in Porto de Galinhas",
    location: "Porto de Galinhas, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Seaside resort in Porto de Galinhas offering luxurious accommodations, private beach access, and a serene atmosphere near natural pools and coral reefs.",
    price: {
      min: 500,
      max: 1000
    },
    image: "beach"
  },
  {
    name: "Chic Boutique Hotel in Gramado",
    location: "Gramado, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Chic boutique hotel in Gramado offering stylish accommodations, boutique shops, and a cozy atmosphere near charming cafes and Swiss-style architecture.",
    price: {
      min: 400,
      max: 800
    },
    image: "city"
  },
  {
    name: "Rustic Cabin in Bonito",
    location: "Bonito, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Rustic cabin in Bonito offering cozy accommodations, rustic charm, and a tranquil setting near natural attractions like waterfalls, caves, and crystal-clear rivers.",
    price: {
      min: 200,
      max: 400
    },
    image: "beach"
  },
  {
    name: "Vineyard Retreat in Vale dos Vinhedos",
    location: "Vale dos Vinhedos, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Vineyard retreat in Vale dos Vinhedos offering elegant accommodations, vineyard tours, and wine tastings in Brazil's premier wine region.",
    price: {
      min: 400,
      max: 800
    },
    image: "vineyard"
  },
  {
    name: "Rainforest Lodge in Amazon Rainforest",
    location: "Amazon Rainforest, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Rainforest lodge in the Amazon Rainforest offering immersive accommodations, wildlife excursions, and canopy tours in one of the world's most biodiverse ecosystems.",
    price: {
      min: 500,
      max: 1000
    },
    image: "rainforest"
  },
  {
    name: "Historic Pousada in Paraty",
    location: "Paraty, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Historic pousada in Paraty offering charming accommodations, colonial architecture, and a laid-back atmosphere near cobblestone streets and colonial churches.",
    price: {
      min: 300,
      max: 600
    },
    image: "colonial"
  },
  {
    name: "Safari Tent in Pantanal",
    location: "Pantanal, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Safari tent in Pantanal offering comfortable accommodations, wildlife viewing opportunities, and immersive safari experiences in Brazil's wildlife-rich wetlands.",
    price: {
      min: 200,
      max: 400
    },
    image: "safari"
  },
  {
    name: "City Apartment in Belo Horizonte",
    location: "Belo Horizonte, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "City apartment in Belo Horizonte offering modern accommodations, city views, and a central location near cultural attractions, shopping malls, and dining venues.",
    price: {
      min: 200,
      max: 400
    },
    image: "city"
  },
  {
    name: "Beachfront Cabin in Ilha do Mel",
    location: "Ilha do Mel, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Beachfront cabin in Ilha do Mel offering rustic accommodations, ocean views, and a tranquil escape near sandy beaches, hiking trails, and lighthouses.",
    price: {
      min: 250,
      max: 500
    },
    image: "beach"
  },
  {
    name: "Mountain Retreat in Petropolis",
    location: "Petropolis, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Mountain retreat in Petropolis offering cozy accommodations, mountain views, and a tranquil atmosphere near historic palaces, museums, and botanical gardens.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Historic Manor House in Tiradentes",
    location: "Tiradentes, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Historic manor house in Tiradentes offering elegant accommodations, colonial charm, and a peaceful atmosphere near cobblestone streets and baroque churches.",
    price: {
      min: 300,
      max: 600
    },
    image: "colonial"
  },
  {
    name: "Family-Friendly Resort in Porto Seguro",
    location: "Porto Seguro, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Family-friendly resort in Porto Seguro offering spacious accommodations, kid-friendly amenities, and a tropical paradise near water parks, beaches, and historic sites.",
    price: {
      min: 400,
      max: 800
    },
    image: "resort"
  },
  {
    name: "Historic Mansion in Ouro Preto",
    location: "Ouro Preto, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Historic mansion in Ouro Preto offering elegant accommodations, colonial charm, and a glimpse into Brazil's rich history near UNESCO-listed landmarks and cobblestone streets.",
    price: {
      min: 300,
      max: 600
    },
    image: "historic"
  },
  {
    name: "Beachfront Resort in Buzios",
    location: "Buzios, Brazil",
    country: "Brazil",
    starRating: 5,
    description: "Beachfront resort in Buzios offering luxurious accommodations, panoramic ocean views, and exclusive beach access near trendy boutiques, restaurants, and nightlife.",
    price: {
      min: 800,
      max: 1500
    },
    image: "beach"
  },
  {
    name: "Rural Farmstay in Pantanal",
    location: "Pantanal, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Rural farmstay in Pantanal offering authentic accommodations, wildlife experiences, and cowboy activities in the heart of Brazil's wetlands.",
    price: {
      min: 200,
      max: 400
    },
    image: "nature"
  },
  {
    name: "Seaside Villa in Florianopolis",
    location: "Florianopolis, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Seaside villa in Florianopolis offering spacious accommodations, stunning ocean views, and a relaxing atmosphere near sandy beaches and beachfront cafes.",
    price: {
      min: 400,
      max: 800
    },
    image: "coastal"
  },
  {
    name: "Jungle Lodge in Amazon Rainforest",
    location: "Amazon Rainforest, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Jungle lodge in the Amazon Rainforest offering rustic accommodations, wildlife encounters, and guided tours in the heart of the world's largest rainforest.",
    price: {
      min: 300,
      max: 600
    },
    image: "jungle"
  },
  {
    name: "City Apartment in Rio de Janeiro",
    location: "Rio de Janeiro, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "City apartment in Rio de Janeiro offering modern accommodations, city views, and a convenient location near iconic landmarks, beaches, and nightlife.",
    price: {
      min: 500,
      max: 1000
    },
    image: "cityscape"
  },
  {
    name: "Mountain Retreat in Itatiaia National Park",
    location: "Itatiaia National Park, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Mountain retreat in Itatiaia National Park offering cozy accommodations, mountain views, and access to hiking trails, waterfalls, and scenic landscapes.",
    price: {
      min: 250,
      max: 500
    },
    image: "mountain"
  },
  {
    name: "Beach House in Fernando de Noronha",
    location: "Fernando de Noronha, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Beach house in Fernando de Noronha offering private accommodations, stunning ocean views, and a tranquil escape near pristine beaches and marine life.",
    price: {
      min: 600,
      max: 1200
    },
    image: "beach"
  },
  {
    name: "Rural Cottage in Sao Joao del Rei",
    location: "Sao Joao del Rei, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Rural cottage in Sao Joao del Rei offering quaint accommodations, countryside views, and a peaceful retreat near historic churches and cultural attractions.",
    price: {
      min: 200,
      max: 400
    },
    image: "countryside"
  },
  {
    name: "Historic Guesthouse in Sao Luis",
    location: "Sao Luis, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Historic guesthouse in Sao Luis offering charming accommodations, colonial architecture, and a cultural experience near cobblestone streets and colorful buildings.",
    price: {
      min: 200,
      max: 400
    },
    image: "historic"
  },
  {
    name: "Tropical Bungalow in Porto Seguro",
    location: "Porto Seguro, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Tropical bungalow in Porto Seguro offering relaxed accommodations, lush gardens, and a laid-back atmosphere near tropical beaches and beachfront bars.",
    price: {
      min: 300,
      max: 600
    },
    image: "jungle"
  },
  {
    name: "Mountain Lodge in Serra da Mantiqueira",
    location: "Serra da Mantiqueira, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Mountain lodge in Serra da Mantiqueira offering cozy accommodations, mountain views, and access to hiking trails, waterfalls, and scenic vistas.",
    price: {
      min: 400,
      max: 800
    },
    image: "mountain"
  },
  {
    name: "Coastal Retreat in Ilhabela",
    location: "Ilhabela, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Coastal retreat in Ilhabela offering serene accommodations, coastal breezes, and access to sandy beaches, sailing, and water sports.",
    price: {
      min: 300,
      max: 600
    },
    image: "coastal"
  },
  {
    name: "Riverfront Cabin in Bonito",
    location: "Bonito, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Riverfront cabin in Bonito offering cozy accommodations, river views, and a tranquil setting near outdoor activities like fishing, kayaking, and nature walks.",
    price: {
        min: 300,
        max: 600
    },
    image: "river"
},
{
    name: "Historic Pousada in Tiradentes",
    location: "Tiradentes, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Historic pousada in Tiradentes offering comfortable accommodations, historic charm, and a cultural experience near colonial churches, museums, and artisan shops.",
    price: {
        min: 200,
        max: 400
    },
    image: "historic"
},
{
    name: "Vineyard Retreat in Vale dos Vinhedos",
    location: "Vale dos Vinhedos, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Vineyard retreat in Vale dos Vinhedos offering elegant accommodations, vineyard tours, and wine tastings in Brazil's premier wine region.",
    price: {
        min: 400,
        max: 800
    },
    image: "vineyard"
},
{
    name: "Mountain Chalet in Campos do Jordao",
    location: "Campos do Jordao, Brazil",
    country: "Brazil",
    starRating: 3,
    description: "Mountain chalet in Campos do Jordao offering cozy accommodations, alpine views, and a peaceful setting near hiking trails and natural attractions.",
    price: {
        min: 250,
        max: 500
    },
    image: "mountain"
},
{
    name: "Beachfront Condo in Natal",
    location: "Natal, Brazil",
    country: "Brazil",
    starRating: 4,
    description: "Beachfront condo in Natal offering modern accommodations, ocean views, and a convenient location near sandy beaches, shopping, and restaurants.",
    price: {
        min: 500,
        max: 1000
    },
    image: "beach"
},
{
  name: "Seaside Villa in Florianopolis",
  location: "Florianopolis, Brazil",
  country: "Brazil",
  starRating: 4,
  description: "Seaside villa in Florianopolis offering spacious accommodations, stunning ocean views, and a relaxing atmosphere near sandy beaches and beachfront cafes.",
  price: {
      min: 400,
      max: 800
  },
  image: "seaside"
},
{
  name: "Jungle Lodge in Amazon Rainforest",
  location: "Amazon Rainforest, Brazil",
  country: "Brazil",
  starRating: 3,
  description: "Jungle lodge in the Amazon Rainforest offering rustic accommodations, wildlife encounters, and guided tours in the heart of the world's largest rainforest.",
  price: {
      min: 300,
      max: 600
  },
  image: "jungle"
},
{
  name: "City Apartment in Rio de Janeiro",
  location: "Rio de Janeiro, Brazil",
  country: "Brazil",
  starRating: 4,
  description: "City apartment in Rio de Janeiro offering modern accommodations, city views, and a convenient location near iconic landmarks, beaches, and nightlife.",
  price: {
      min: 500,
      max: 1000
  },
  image: "city"
},
{
  name: "Lakeside Retreat in Bonito",
  location: "Bonito, Brazil",
  country: "Brazil",
  starRating: 3,
  description: "Lakeside retreat in Bonito offering comfortable accommodations, scenic views, and a peaceful ambiance near outdoor activities like fishing and birdwatching.",
  price: {
      min: 300,
      max: 600
  },
  image: "nature"
},
{
  name: "Downtown Apartment in Sao Paulo",
  location: "Sao Paulo, Brazil",
  country: "Brazil",
  starRating: 3,
  description: "Downtown apartment in Sao Paulo offering modern accommodations, city views, and a convenient location near cultural landmarks, restaurants, and nightlife.",
  price: {
      min: 250,
      max: 500
  },
  image: "cityscape"
},
{
  name: "Rural Cottage in Gramado",
  location: "Gramado, Brazil",
  country: "Brazil",
  starRating: 2,
  description: "Rural cottage in Gramado offering cozy accommodations, countryside views, and a quiet retreat near charming villages and outdoor activities.",
  price: {
      min: 200,
      max: 400
  },
  image: "countryside"
},
{
  name: "Beach Bungalow in Jericoacoara",
  location: "Jericoacoara, Brazil",
  country: "Brazil",
  starRating: 3,
  description: "Beach bungalow in Jericoacoara offering laid-back accommodations, beachfront access, and a relaxed atmosphere near sand dunes and kite surfing spots.",
  price: {
      min: 300,
      max: 600
  },
  image: "beach"
},
{
  name: "Forest Cabin in Itacare",
  location: "Itacare, Brazil",
  country: "Brazil",
  starRating: 2,
  description: "Forest cabin in Itacare offering rustic accommodations, forest views, and a tranquil escape near hiking trails, waterfalls, and pristine beaches.",
  price: {
      min: 200,
      max: 400
  },
  image: "forest"
},
{
  name: "Riverside Lodge in Manaus",
  location: "Manaus, Brazil",
  country: "Brazil",
  starRating: 3,
  description: "Riverside lodge in Manaus offering comfortable accommodations, river views, and access to Amazon rainforest adventures like jungle treks and river cruises.",
  price: {
      min: 300,
      max: 600
  },
  image: "river"
},
{
  name: "Coastal Retreat in Trancoso",
  location: "Trancoso, Brazil",
  country: "Brazil",
  starRating: 4,
  description: "Coastal retreat in Trancoso offering upscale accommodations, ocean views, and a laid-back vibe near sandy beaches, beach clubs, and seaside dining.",
  price: {
      min: 400,
      max: 800
  },
  image: "coast"
},
{
  name: "Mountain Lodge in Goncalves",
  location: "Goncalves, Brazil",
  country: "Brazil",
  starRating: 3,
  description: "Mountain lodge in Goncalves offering cozy accommodations, mountain vistas, and a serene setting near hiking trails, waterfalls, and local cuisine.",
  price: {
      min: 250,
      max: 500
  },
  image: "mountain"
}
];
console.log(brazilHotels);

// Argentina
const argentinaHotels = [
  {
      name: "Mountain Lodge in Bariloche",
      location: "Bariloche, Argentina",
      country: "Argentina",
      starRating: 4,
      description: "Mountain lodge in Bariloche offering cozy accommodations, stunning mountain views, and access to skiing, hiking, and outdoor adventures.",
      price: {
          min: 300,
          max: 600
      },
      image: "mountain"
  },
  {
      name: "City Apartment in Buenos Aires",
      location: "Buenos Aires, Argentina",
      country: "Argentina",
      starRating: 3,
      description: "City apartment in Buenos Aires offering modern accommodations, city views, and a central location near cultural attractions, shopping, and dining.",
      price: {
          min: 250,
          max: 500
      },
      image: "cityscape"
  },
  {
      name: "Estancia Retreat in Cordoba",
      location: "Cordoba, Argentina",
      country: "Argentina",
      starRating: 4,
      description: "Estancia retreat in Cordoba offering traditional accommodations, countryside views, and a relaxing ambiance near horseback riding, polo, and local cuisine.",
      price: {
          min: 400,
          max: 800
      },
      image: "countryside"
  },
  {
      name: "Beachfront Resort in Mar del Plata",
      location: "Mar del Plata, Argentina",
      country: "Argentina",
      starRating: 4,
      description: "Beachfront resort in Mar del Plata offering upscale accommodations, ocean views, and a vibrant atmosphere near sandy beaches, nightlife, and water sports.",
      price: {
          min: 400,
          max: 800
      },
      image: "beach"
  },
  {
      name: "Winery Retreat in Mendoza",
      location: "Mendoza, Argentina",
      country: "Argentina",
      starRating: 4,
      description: "Winery retreat in Mendoza offering boutique accommodations, vineyard tours, and wine tastings in Argentina's renowned wine region.",
      price: {
          min: 400,
          max: 800
      },
      image: "vineyard"
  },
  {
      name: "Ranch Stay in San Antonio de Areco",
      location: "San Antonio de Areco, Argentina",
      country: "Argentina",
      starRating: 3,
      description: "Ranch stay in San Antonio de Areco offering rustic accommodations, gaucho experiences, and horseback riding adventures in Argentina's pampas region.",
      price: {
          min: 300,
          max: 600
      },
      image: "ranch"
  },
  {
      name: "Lakefront Cabin in Villa La Angostura",
      location: "Villa La Angostura, Argentina",
      country: "Argentina",
      starRating: 3,
      description: "Lakefront cabin in Villa La Angostura offering cozy accommodations, lake views, and a peaceful setting near hiking trails, fishing, and boating.",
      price: {
          min: 250,
          max: 500
      },
      image: "lake"
  },
  {
      name: "Historic Hotel in Salta",
      location: "Salta, Argentina",
      country: "Argentina",
      starRating: 3,
      description: "Historic hotel in Salta offering charming accommodations, colonial architecture, and a cultural experience near historic landmarks, museums, and markets.",
      price: {
          min: 250,
          max: 500
      },
      image: "historic"
  },
  {
      name: "Riverfront Lodge in Tigre",
      location: "Tigre, Argentina",
      country: "Argentina",
      starRating: 3,
      description: "Riverfront lodge in Tigre offering comfortable accommodations, river views, and a tranquil escape near delta islands, boat tours, and nature reserves.",
      price: {
          min: 300,
          max: 600
      },
      image: "river"
  },
  {
    name: "Seaside Villa in Pinamar",
    location: "Pinamar, Argentina",
    country: "Argentina",
    starRating: 4,
    description: "Seaside villa in Pinamar offering luxurious accommodations, stunning ocean views, and direct beach access near golf courses, restaurants, and entertainment.",
    price: {
        min: 500,
        max: 1000
    },
    image: "beach"
},
{
    name: "Mountain Chalet in San Martin de los Andes",
    location: "San Martin de los Andes, Argentina",
    country: "Argentina",
    starRating: 3,
    description: "Mountain chalet in San Martin de los Andes offering cozy accommodations, mountain vistas, and a peaceful retreat near skiing, fishing, and hiking trails.",
    price: {
        min: 300,
        max: 600
    },
    image: "mountain"
},
{
    name: "City Loft in Rosario",
    location: "Rosario, Argentina",
    country: "Argentina",
    starRating: 3,
    description: "City loft in Rosario offering modern accommodations, city skyline views, and a central location near cultural attractions, shopping, and dining.",
    price: {
        min: 250,
        max: 500
    },
    image: "city"
},
{
    name: "Eco Lodge in Puerto Iguazu",
    location: "Puerto Iguazu, Argentina",
    country: "Argentina",
    starRating: 3,
    description: "Eco lodge in Puerto Iguazu offering sustainable accommodations, jungle views, and a nature-immersed experience near Iguazu Falls and wildlife reserves.",
    price: {
        min: 300,
        max: 600
    },
    image: "jungle"
},
{
    name: "Ranch Retreat in San Rafael",
    location: "San Rafael, Argentina",
    country: "Argentina",
    starRating: 3,
    description: "Ranch retreat in San Rafael offering traditional accommodations, vineyard views, and outdoor activities like horseback riding, wine tasting, and hot springs.",
    price: {
        min: 300,
        max: 600
    },
    image: "ranch"
},
{
    name: "Riverside Cabin in El Bolson",
    location: "El Bolson, Argentina",
    country: "Argentina",
    starRating: 2,
    description: "Riverside cabin in El Bolson offering rustic accommodations, riverfront access, and a tranquil setting near artisan markets, breweries, and hiking trails.",
    price: {
        min: 200,
        max: 400
    },
    image: "river"
},
{
    name: "Historic Inn in San Juan",
    location: "San Juan, Argentina",
    country: "Argentina",
    starRating: 3,
    description: "Historic inn in San Juan offering charming accommodations, colonial architecture, and a cultural experience near vineyards, olive groves, and historic sites.",
    price: {
        min: 250,
        max: 500
    },
    image: "historic"
},
{
    name: "Forest Lodge in Tandil",
    location: "Tandil, Argentina",
    country: "Argentina",
    starRating: 3,
    description: "Forest lodge in Tandil offering peaceful accommodations, forest views, and outdoor adventures like hiking, rock climbing, and mountain biking.",
    price: {
        min: 250,
        max: 500
    },
    image: "forest"
},
{
    name: "Coastal Retreat in Mar de las Pampas",
    location: "Mar de las Pampas, Argentina",
    country: "Argentina",
    starRating: 3,
    description: "Coastal retreat in Mar de las Pampas offering relaxed accommodations, beach access, and a laid-back vibe near sand dunes, pine forests, and seaside cafes.",
    price: {
        min: 300,
        max: 600
    },
    image: "coast"
},
{
    name: "Mountain Cabin in Villa General Belgrano",
    location: "Villa General Belgrano, Argentina",
    country: "Argentina",
    starRating: 2,
    description: "Mountain cabin in Villa General Belgrano offering cozy accommodations, mountain views, and a serene atmosphere near Oktoberfest celebrations, craft breweries, and hiking trails.",
    price: {
        min: 200,
        max: 400
    },
    image: "mountain"
},
{
  name: "Beachfront Hotel in Villa Gesell",
  location: "Villa Gesell, Argentina",
  country: "Argentina",
  starRating: 4,
  description: "Beachfront hotel in Villa Gesell offering upscale accommodations, panoramic ocean views, and a relaxed atmosphere near sandy beaches, surf schools, and beachfront restaurants.",
  price: {
      min: 400,
      max: 800
  },
  image: "beach"
},
{
  name: "City Center Apartment in Cordoba",
  location: "Cordoba, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "City center apartment in Cordoba offering modern accommodations, city views, and a convenient location near historic landmarks, museums, and vibrant nightlife.",
  price: {
      min: 250,
      max: 500
  },
  image: "cityscape"
},
{
  name: "Mountain Retreat in Ushuaia",
  location: "Ushuaia, Argentina",
  country: "Argentina",
  starRating: 4,
  description: "Mountain retreat in Ushuaia offering cozy accommodations, mountain vistas, and a tranquil escape near Tierra del Fuego National Park, hiking trails, and wildlife.",
  price: {
      min: 350,
      max: 700
  },
  image: "mountain"
},
{
  name: "Historic Mansion in San Miguel de Tucuman",
  location: "San Miguel de Tucuman, Argentina",
  country: "Argentina",
  starRating: 4,
  description: "Historic mansion in San Miguel de Tucuman offering elegant accommodations, colonial architecture, and a cultural experience near historic sites, plazas, and local markets.",
  price: {
      min: 400,
      max: 800
  },
  image: "historic"
},
{
  name: "Lakeview Chalet in Bariloche",
  location: "Bariloche, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Lakeview chalet in Bariloche offering comfortable accommodations, lake views, and a peaceful setting near Cerro Catedral ski resort, hiking trails, and chocolate shops.",
  price: {
      min: 300,
      max: 600
  },
  image: "lake"
},
{
  name: "Rural Farmstay in San Rafael",
  location: "San Rafael, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Rural farmstay in San Rafael offering rustic accommodations, vineyard views, and farm-to-table experiences near wineries, olive groves, and natural attractions.",
  price: {
      min: 300,
      max: 600
  },
  image: "countryside"
},
{
  name: "Riverfront Cabin in La Cumbre",
  location: "La Cumbre, Argentina",
  country: "Argentina",
  starRating: 2,
  description: "Riverfront cabin in La Cumbre offering cozy accommodations, river views, and a tranquil escape near hiking trails, waterfalls, and outdoor adventures.",
  price: {
      min: 200,
      max: 400
  },
  image: "river"
},
{
  name: "Vineyard Retreat in Cafayate",
  location: "Cafayate, Argentina",
  country: "Argentina",
  starRating: 4,
  description: "Vineyard retreat in Cafayate offering boutique accommodations, vineyard tours, and wine tastings in Argentina's wine country near natural attractions and outdoor activities.",
  price: {
      min: 400,
      max: 800
  },
  image: "vineyard"
},
{
  name: "Beach House in Mar del Plata",
  location: "Mar del Plata, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Beach house in Mar del Plata offering laid-back accommodations, beach access, and a relaxed vibe near sandy beaches, seafood restaurants, and coastal attractions.",
  price: {
      min: 300,
      max: 600
  },
  image: "beach"
},
{
  name: "Riverfront Lodge in El Chalten",
  location: "El Chalten, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Riverfront lodge in El Chalten offering cozy accommodations, mountain views, and access to hiking trails, glacier treks, and outdoor adventures.",
  price: {
      min: 300,
      max: 600
  },
  image: "river"
},
{
  name: "Beachfront Resort in Puerto Madryn",
  location: "Puerto Madryn, Argentina",
  country: "Argentina",
  starRating: 4,
  description: "Beachfront resort in Puerto Madryn offering luxury accommodations, ocean views, and a prime location for whale watching, scuba diving, and coastal excursions.",
  price: {
      min: 500,
      max: 1000
  },
  image: "beach"
},
{
  name: "Hacienda Retreat in San Antonio de Areco",
  location: "San Antonio de Areco, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Hacienda retreat in San Antonio de Areco offering rustic accommodations, traditional charm, and equestrian activities near gaucho culture and estancias.",
  price: {
      min: 300,
      max: 600
  },
  image: "hacienda"
},
{
  name: "Lakeview Cottage in Villa General Belgrano",
  location: "Villa General Belgrano, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Lakeview cottage in Villa General Belgrano offering charming accommodations, lake views, and a serene setting near Oktoberfest celebrations, craft breweries, and outdoor activities.",
  price: {
      min: 300,
      max: 600
  },
  image: "lake"
},
{
  name: "City Apartment in Mendoza",
  location: "Mendoza, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "City apartment in Mendoza offering comfortable accommodations, city views, and a convenient location near wineries, restaurants, and cultural attractions.",
  price: {
      min: 250,
      max: 500
  },
  image: "city"
},
{
  name: "Mountain Lodge in Villa La Angostura",
  location: "Villa La Angostura, Argentina",
  country: "Argentina",
  starRating: 4,
  description: "Mountain lodge in Villa La Angostura offering upscale accommodations, mountain views, and a tranquil setting near skiing, fishing, and natural attractions.",
  price: {
      min: 400,
      max: 800
  },
  image: "mountain"
},
{
  name: "Coastal Cabin in Mar de las Pampas",
  location: "Mar de las Pampas, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Coastal cabin in Mar de las Pampas offering cozy accommodations, beach access, and a laid-back atmosphere near sand dunes, pine forests, and seaside cafes.",
  price: {
      min: 300,
      max: 600
  },
  image: "coastal"
},
{
  name: "Ranch House in San Rafael",
  location: "San Rafael, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Ranch house in San Rafael offering rustic accommodations, vineyard views, and outdoor activities like horseback riding, wine tasting, and hot springs.",
  price: {
      min: 300,
      max: 600
  },
  image: "ranch"
},
{
  name: "Lakeside Chalet in Bariloche",
  location: "Bariloche, Argentina",
  country: "Argentina",
  starRating: 3,
  description: "Lakeside chalet in Bariloche offering comfortable accommodations, lake views, and a peaceful setting near Cerro Catedral ski resort, hiking trails, and chocolate shops.",
  price: {
      min: 300,
      max: 600
  },
  image: "lake"
}
];

console.log(argentinaHotels);

// Mexico
const mexicoHotels = [
  {
      name: "Beachfront Resort in Cancun",
      location: "Cancun, Mexico",
      country: "Mexico",
      starRating: 5,
      description: "Beachfront resort in Cancun offering luxurious accommodations, pristine beaches, and an array of water sports and entertainment options.",
      price: {
          min: 600,
          max: 1200
      },
      image: "beach"
  },
  {
      name: "Colonial Boutique Hotel in Mexico City",
      location: "Mexico City, Mexico",
      country: "Mexico",
      starRating: 4,
      description: "Colonial boutique hotel in Mexico City offering elegant accommodations, historic charm, and proximity to cultural attractions and culinary delights.",
      price: {
          min: 400,
          max: 800
      },
      image: "colonial"
  },
  {
      name: "All-Inclusive Resort in Riviera Maya",
      location: "Riviera Maya, Mexico",
      country: "Mexico",
      starRating: 5,
      description: "All-inclusive resort in Riviera Maya offering luxury accommodations, gourmet dining, and access to pristine beaches and ancient Mayan ruins.",
      price: {
          min: 800,
          max: 1600
      },
      image: "resort"
  },
  {
      name: "Hacienda Retreat in Yucatan",
      location: "Yucatan, Mexico",
      country: "Mexico",
      starRating: 4,
      description: "Hacienda retreat in Yucatan offering rustic-chic accommodations, Mayan influences, and cultural experiences near archaeological sites and cenotes.",
      price: {
          min: 500,
          max: 1000
      },
      image: "hacienda"
  },
  {
      name: "Mountain Lodge in Copper Canyon",
      location: "Copper Canyon, Mexico",
      country: "Mexico",
      starRating: 3,
      description: "Mountain lodge in Copper Canyon offering cozy accommodations, breathtaking canyon views, and opportunities for hiking, birdwatching, and adventure.",
      price: {
          min: 300,
          max: 600
      },
      image: "mountain"
  },
  {
      name: "Seaside Villa in Tulum",
      location: "Tulum, Mexico",
      country: "Mexico",
      starRating: 4,
      description: "Seaside villa in Tulum offering private accommodations, crystal-clear waters, and a laid-back atmosphere near ancient Mayan ruins and eco-parks.",
      price: {
          min: 500,
          max: 1000
      },
      image: "seaside"
  },
  {
      name: "Rainforest Retreat in Chiapas",
      location: "Chiapas, Mexico",
      country: "Mexico",
      starRating: 3,
      description: "Rainforest retreat in Chiapas offering eco-friendly accommodations, lush jungle surroundings, and access to waterfalls, ruins, and indigenous communities.",
      price: {
          min: 300,
          max: 600
      },
      image: "rainforest"
  },
  {
      name: "Urban Loft in Guadalajara",
      location: "Guadalajara, Mexico",
      country: "Mexico",
      starRating: 3,
      description: "Urban loft in Guadalajara offering modern accommodations, city views, and a vibrant atmosphere near historic sites, markets, and nightlife.",
      price: {
          min: 250,
          max: 500
      },
      image: "vineyard"
  },
  {
      name: "Beach House in Puerto Vallarta",
      location: "Puerto Vallarta, Mexico",
      country: "Mexico",
      starRating: 4,
      description: "Beach house in Puerto Vallarta offering beachfront accommodations, panoramic views, and a relaxing escape near water sports, nightlife, and cultural attractions.",
      price: {
          min: 500,
          max: 1000
      },
      image: "beach"
  },
  {
    name: "Beachfront Resort in Cancun",
    location: "Cancun, Mexico",
    country: "Mexico",
    starRating: 5,
    description: "Beachfront resort in Cancun offering luxurious accommodations, pristine beaches, and an array of water sports and entertainment options.",
    price: {
        min: 600,
        max: 1200
    },
    image: "beach"
},
{
    name: "Colonial Boutique Hotel in Mexico City",
    location: "Mexico City, Mexico",
    country: "Mexico",
    starRating: 4,
    description: "Colonial boutique hotel in Mexico City offering elegant accommodations, historic charm, and proximity to cultural attractions and culinary delights.",
    price: {
        min: 400,
        max: 800
    },
    image: "city"
},
{
    name: "All-Inclusive Resort in Riviera Maya",
    location: "Riviera Maya, Mexico",
    country: "Mexico",
    starRating: 5,
    description: "All-inclusive resort in Riviera Maya offering luxury accommodations, gourmet dining, and access to pristine beaches and ancient Mayan ruins.",
    price: {
        min: 800,
        max: 1600
    },
    image: "resort"
},
{
    name: "Hacienda Retreat in Yucatan",
    location: "Yucatan, Mexico",
    country: "Mexico",
    starRating: 4,
    description: "Hacienda retreat in Yucatan offering rustic-chic accommodations, Mayan influences, and cultural experiences near archaeological sites and cenotes.",
    price: {
        min: 500,
        max: 1000
    },
    image: "hacienda"
},
{
    name: "Mountain Lodge in Copper Canyon",
    location: "Copper Canyon, Mexico",
    country: "Mexico",
    starRating: 3,
    description: "Mountain lodge in Copper Canyon offering cozy accommodations, breathtaking canyon views, and opportunities for hiking, birdwatching, and adventure.",
    price: {
        min: 300,
        max: 600
    },
    image: "mountain"
},
{
    name: "Seaside Villa in Tulum",
    location: "Tulum, Mexico",
    country: "Mexico",
    starRating: 4,
    description: "Seaside villa in Tulum offering private accommodations, crystal-clear waters, and a laid-back atmosphere near ancient Mayan ruins and eco-parks.",
    price: {
        min: 500,
        max: 1000
    },
    image: "beach"
},
{
    name: "Art Deco Hotel in Monterrey",
    location: "Monterrey, Mexico",
    country: "Mexico",
    starRating: 4,
    description: "Art Deco hotel in Monterrey offering stylish accommodations, urban vibes, and a central location near museums, galleries, and cultural landmarks.",
    price: {
        min: 400,
        max: 800
    },
    image: "city"
},
{
    name: "Rainforest Retreat in Chiapas",
    location: "Chiapas, Mexico",
    country: "Mexico",
    starRating: 3,
    description: "Rainforest retreat in Chiapas offering eco-friendly accommodations, lush jungle surroundings, and access to waterfalls, ruins, and indigenous communities.",
    price: {
        min: 300,
        max: 600
    },
    image: "jungle"
},
{
    name: "Urban Loft in Guadalajara",
    location: "Guadalajara, Mexico",
    country: "Mexico",
    starRating: 3,
    description: "Urban loft in Guadalajara offering modern accommodations, city views, and a vibrant atmosphere near historic sites, markets, and nightlife.",
    price: {
        min: 250,
        max: 500
    },
    image: "city"
},
{
    name: "Beach House in Puerto Vallarta",
    location: "Puerto Vallarta, Mexico",
    country: "Mexico",
    starRating: 4,
    description: "Beach house in Puerto Vallarta offering beachfront accommodations, panoramic views, and a relaxing escape near water sports, nightlife, and cultural attractions.",
    price: {
        min: 500,
        max: 1000
    },
    image: "beach"
},
{
  name: "Sunny Beach Resort in Playa del Carmen",
  location: "Playa del Carmen, Mexico",
  country: "Mexico",
  starRating: 4,
  description: "Sunny beach resort in Playa del Carmen offering comfortable accommodations, beach access, and a laid-back atmosphere near shops, restaurants, and nightlife.",
  price: {
      min: 400,
      max: 800
  },
  image: "beach"
},
{
  name: "Modern City Hotel in Mexico City",
  location: "Mexico City, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Modern city hotel in Mexico City offering convenient accommodations, city views, and a central location near attractions, dining, and entertainment.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Cozy Mountain Cabin in Monterrey",
  location: "Monterrey, Mexico",
  country: "Mexico",
  starRating: 2,
  description: "Cozy mountain cabin in Monterrey offering simple accommodations, mountain views, and a peaceful retreat near hiking trails and outdoor activities.",
  price: {
      min: 200,
      max: 400
  },
  image: "mountain"
},
{
  name: "Quaint Countryside Inn in Guanajuato",
  location: "Guanajuato, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Quaint countryside inn in Guanajuato offering charming accommodations, rural views, and a relaxing ambiance near historic sites and natural attractions.",
  price: {
      min: 300,
      max: 600
  },
  image: "countryside"
},
{
  name: "Tropical Bungalow in Tulum",
  location: "Tulum, Mexico",
  country: "Mexico",
  starRating: 4,
  description: "Tropical bungalow in Tulum offering cozy accommodations, lush surroundings, and a tranquil escape near beaches, ruins, and cenotes.",
  price: {
      min: 400,
      max: 800
  },
  image: "jungle"
},
{
  name: "Rustic Ranch House in Baja California",
  location: "Baja California, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Rustic ranch house in Baja California offering authentic accommodations, desert views, and a secluded getaway near outdoor adventures and cultural experiences.",
  price: {
      min: 300,
      max: 600
  },
  image: "ranch"
},
{
  name: "Seaside Cottage in Puerto Escondido",
  location: "Puerto Escondido, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Seaside cottage in Puerto Escondido offering simple accommodations, ocean breezes, and a laid-back vibe near surf spots, beaches, and local markets.",
  price: {
      min: 300,
      max: 600
  },
  image: "seaside"
},
{
  name: "Historic Guesthouse in Merida",
  location: "Merida, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Historic guesthouse in Merida offering cozy accommodations, colonial charm, and a warm welcome near plazas, markets, and cultural landmarks.",
  price: {
      min: 300,
      max: 600
  },
  image: "historic"
},
{
  name: "Tropical Paradise Resort in Acapulco",
  location: "Acapulco, Mexico",
  country: "Mexico",
  starRating: 4,
  description: "Tropical paradise resort in Acapulco offering comfortable accommodations, palm-fringed beaches, and lively entertainment near water sports and nightlife.",
  price: {
      min: 400,
      max: 800
  },
  image: "jungle"
},
{
  name: "Relaxing Beach Resort in Puerto Vallarta",
  location: "Puerto Vallarta, Mexico",
  country: "Mexico",
  starRating: 4,
  description: "Relaxing beach resort in Puerto Vallarta offering comfortable accommodations, beach access, and a serene atmosphere near restaurants and shopping.",
  price: {
      min: 400,
      max: 800
  },
  image: "beach"
},
{
  name: "City Center Hotel in Mexico City",
  location: "Mexico City, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "City center hotel in Mexico City offering convenient accommodations, city views, and easy access to attractions, dining, and nightlife.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Mountain Retreat in San Cristobal de las Casas",
  location: "San Cristobal de las Casas, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Mountain retreat in San Cristobal de las Casas offering cozy accommodations, mountain views, and a peaceful ambiance near cultural sites and outdoor activities.",
  price: {
      min: 300,
      max: 600
  },
  image: "mountain"
},
{
  name: "Historic Guesthouse in Oaxaca",
  location: "Oaxaca, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Historic guesthouse in Oaxaca offering charming accommodations, colonial architecture, and a cultural experience near markets and historic sites.",
  price: {
      min: 300,
      max: 600
  },
  image: "historic"
},
{
  name: "Seaside Retreat in Mazatlan",
  location: "Mazatlan, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Seaside retreat in Mazatlan offering comfortable accommodations, ocean views, and a laid-back atmosphere near beaches, seafood restaurants, and local markets.",
  price: {
      min: 300,
      max: 600
  },
  image: "seaside"
},
{
  name: "Tropical Resort in Huatulco",
  location: "Huatulco, Mexico",
  country: "Mexico",
  starRating: 4,
  description: "Tropical resort in Huatulco offering luxurious accommodations, lush gardens, and a tranquil setting near beaches, golf courses, and nature reserves.",
  price: {
      min: 400,
      max: 800
  },
  image: "jungle"
},
{
  name: "Mountain Lodge in Valle de Bravo",
  location: "Valle de Bravo, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Mountain lodge in Valle de Bravo offering rustic accommodations, mountain views, and outdoor adventures near forests, lakes, and waterfalls.",
  price: {
      min: 300,
      max: 600
  },
  image: "mountain"
},
{
  name: "Rural Retreat in Tepoztlan",
  location: "Tepoztlan, Mexico",
  country: "Mexico",
  starRating: 2,
  description: "Rural retreat in Tepoztlan offering simple accommodations, countryside views, and a peaceful escape near hiking trails, spas, and holistic therapies.",
  price: {
      min: 200,
      max: 400
  },
  image: "countryside"
},
{
  name: "Beachfront Bungalow in Akumal",
  location: "Akumal, Mexico",
  country: "Mexico",
  starRating: 3,
  description: "Beachfront bungalow in Akumal offering cozy accommodations, beach access, and a relaxed atmosphere near snorkeling spots, eco-parks, and local restaurants.",
  price: {
      min: 300,
      max: 600
  },
  image: "beach"
}
];

console.log(mexicoHotels);

// Japan
const japanHotels = [
  {
      name: "Traditional Ryokan in Kyoto",
      location: "Kyoto, Japan",
      country: "Japan",
      starRating: 4,
      description: "Traditional ryokan in Kyoto offering authentic accommodations, tatami floors, and Japanese hospitality near temples, gardens, and cultural landmarks.",
      price: {
          min: 400,
          max: 800
      },
      image: "ryokan"
  },
  {
      name: "Modern Hotel in Tokyo",
      location: "Tokyo, Japan",
      country: "Japan",
      starRating: 4,
      description: "Modern hotel in Tokyo offering stylish accommodations, city views, and a central location near shopping districts, dining, and entertainment.",
      price: {
          min: 400,
          max: 800
      },
      image: "city"
  },
  {
      name: "Mountain Retreat in Hakone",
      location: "Hakone, Japan",
      country: "Japan",
      starRating: 3,
      description: "Mountain retreat in Hakone offering tranquil accommodations, hot springs, and scenic views of Mount Fuji near hiking trails and art museums.",
      price: {
          min: 300,
          max: 600
      },
      image: "mountain"
  },
  {
      name: "Seaside Inn in Okinawa",
      location: "Okinawa, Japan",
      country: "Japan",
      starRating: 3,
      description: "Seaside inn in Okinawa offering comfortable accommodations, beach access, and a relaxed atmosphere near coral reefs, marine life, and local cuisine.",
      price: {
          min: 300,
          max: 600
      },
      image: "seaside"
  },
  {
      name: "Historic Guesthouse in Kanazawa",
      location: "Kanazawa, Japan",
      country: "Japan",
      starRating: 3,
      description: "Historic guesthouse in Kanazawa offering charming accommodations, traditional architecture, and a cultural experience near geisha districts and samurai residences.",
      price: {
          min: 300,
          max: 600
      },
      image: "historic"
  },
  {
      name: "Rural Farmstay in Hokkaido",
      location: "Hokkaido, Japan",
      country: "Japan",
      starRating: 2,
      description: "Rural farmstay in Hokkaido offering simple accommodations, countryside views, and farm activities near national parks, hot springs, and skiing resorts.",
      price: {
          min: 200,
          max: 400
      },
      image: "countryside"
  },
  {
      name: "Urban Boutique Hotel in Osaka",
      location: "Osaka, Japan",
      country: "Japan",
      starRating: 4,
      description: "Urban boutique hotel in Osaka offering chic accommodations, city views, and a vibrant atmosphere near shopping streets, nightlife, and cultural attractions.",
      price: {
          min: 400,
          max: 800
      },
      image: "city"
  },
  {
      name: "Traditional Machiya in Kyoto",
      location: "Kyoto, Japan",
      country: "Japan",
      starRating: 3,
      description: "Traditional machiya in Kyoto offering cozy accommodations, wooden architecture, and a historic ambiance near temples, teahouses, and traditional craft shops.",
      price: {
          min: 300,
          max: 600
      },
      image: "traditional"
  },
  {
      name: "Coastal Resort in Ishigaki",
      location: "Ishigaki, Japan",
      country: "Japan",
      starRating: 3,
      description: "Coastal resort in Ishigaki offering beachfront accommodations, tropical vibes, and island adventures near coral reefs, snorkeling spots, and local markets.",
      price: {
          min: 300,
          max: 600
      },
      image: "coastal"
  },
  {
      name: "Ski Lodge in Nagano",
      location: "Nagano, Japan",
      country: "Japan",
      starRating: 3,
      description: "Ski lodge in Nagano offering cozy accommodations, snowy landscapes, and winter activities near ski resorts, hot springs, and traditional onsens.",
      price: {
          min: 300,
          max: 600
      },
      image: "ski"
  },
  {
    name: "Riverside Ryokan in Kyoto",
    location: "Kyoto, Japan",
    country: "Japan",
    starRating: 4,
    description: "Riverside ryokan in Kyoto offering traditional accommodations, serene views, and a cultural experience near temples, gardens, and tea houses.",
    price: {
        min: 400,
        max: 800
    },
    image: "ryokan"
},
{
    name: "Downtown Hotel in Tokyo",
    location: "Tokyo, Japan",
    country: "Japan",
    starRating: 4,
    description: "Downtown hotel in Tokyo offering modern accommodations, city skyline views, and a central location near shopping districts, dining, and nightlife.",
    price: {
        min: 400,
        max: 800
    },
    image: "city"
},
{
    name: "Mountain Retreat in Nagano",
    location: "Nagano, Japan",
    country: "Japan",
    starRating: 3,
    description: "Mountain retreat in Nagano offering tranquil accommodations, alpine views, and outdoor adventures near ski resorts, hot springs, and hiking trails.",
    price: {
        min: 300,
        max: 600
    },
    image: "mountain"
},
{
    name: "Seaside Inn in Okinawa",
    location: "Okinawa, Japan",
    country: "Japan",
    starRating: 3,
    description: "Seaside inn in Okinawa offering cozy accommodations, ocean breezes, and a laid-back atmosphere near beaches, snorkeling spots, and island tours.",
    price: {
        min: 300,
        max: 600
    },
    image: "seaside"
},
{
    name: "Historic Ryokan in Kanazawa",
    location: "Kanazawa, Japan",
    country: "Japan",
    starRating: 3,
    description: "Historic ryokan in Kanazawa offering authentic accommodations, tatami floors, and cultural immersion near geisha districts, samurai houses, and traditional crafts.",
    price: {
        min: 300,
        max: 600
    },
    image: "historic"
},
{
    name: "Urban Boutique Hotel in Osaka",
    location: "Osaka, Japan",
    country: "Japan",
    starRating: 4,
    description: "Urban boutique hotel in Osaka offering chic accommodations, vibrant city life, and easy access to shopping, dining, and entertainment districts.",
    price: {
        min: 400,
        max: 800
    },
    image: "city"
},
{
    name: "Traditional Machiya in Kanazawa",
    location: "Kanazawa, Japan",
    country: "Japan",
    starRating: 3,
    description: "Traditional machiya in Kanazawa offering cozy accommodations, wooden interiors, and historic charm near samurai districts, tea houses, and local markets.",
    price: {
        min: 300,
        max: 600
    },
    image: "traditional"
},
{
    name: "Coastal Resort in Miyazaki",
    location: "Miyazaki, Japan",
    country: "Japan",
    starRating: 3,
    description: "Coastal resort in Miyazaki offering beachfront accommodations, tropical landscapes, and outdoor activities near surfing beaches, natural parks, and shrines.",
    price: {
        min: 300,
        max: 600
    },
    image: "coastal"
},
{
    name: "Ski Lodge in Shiga Kogen",
    location: "Shiga Kogen, Japan",
    country: "Japan",
    starRating: 3,
    description: "Ski lodge in Shiga Kogen offering cozy accommodations, snowy vistas, and winter sports near ski slopes, onsens, and hiking trails.",
    price: {
        min: 300,
        max: 600
    },
    image: "ski"
},
{
  name: "Traditional Inn in Nara",
  location: "Nara, Japan",
  country: "Japan",
  starRating: 3,
  description: "Traditional inn in Nara offering authentic accommodations, serene gardens, and a cultural experience near historic temples and deer parks.",
  price: {
      min: 300,
      max: 600
  },
  image: "traditional"
},
{
  name: "Futuristic Hotel in Osaka",
  location: "Osaka, Japan",
  country: "Japan",
  starRating: 4,
  description: "Futuristic hotel in Osaka offering modern accommodations, high-tech amenities, and a convenient location near shopping malls and entertainment districts.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},
{
  name: "Ryokan with Onsen in Hakone",
  location: "Hakone, Japan",
  country: "Japan",
  starRating: 4,
  description: "Ryokan with onsen in Hakone offering traditional accommodations, natural hot springs, and scenic views of Mount Fuji near art museums and hiking trails.",
  price: {
      min: 400,
      max: 800
  },
  image: "ryokan"
},
{
  name: "Bamboo Cottage in Kyoto",
  location: "Kyoto, Japan",
  country: "Japan",
  starRating: 3,
  description: "Bamboo cottage in Kyoto offering cozy accommodations, bamboo groves, and a peaceful atmosphere near bamboo forests and ancient temples.",
  price: {
      min: 300,
      max: 600
  },
  image: "countryside"
},
{
  name: "Modern Apartment in Tokyo",
  location: "Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Modern apartment in Tokyo offering stylish accommodations, city views, and urban convenience near train stations, restaurants, and nightlife.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},

{
  name: "Beachfront Resort in Ishigaki",
  location: "Ishigaki, Japan",
  country: "Japan",
  starRating: 4,
  description: "Beachfront resort in Ishigaki offering luxurious accommodations, white sand beaches, and turquoise waters near snorkeling spots and coral reefs.",
  price: {
      min: 400,
      max: 800
  },
  image: "beach"
},
{
  name: "Rural Retreat in Shirakawa-go",
  location: "Shirakawa-go, Japan",
  country: "Japan",
  starRating: 3,
  description: "Rural retreat in Shirakawa-go offering traditional farmhouses, rice paddies, and cultural experiences near UNESCO World Heritage sites and hiking trails.",
  price: {
      min: 300,
      max: 600
  },
  image: "countryside"
},
{
  name: "Skyline Hotel in Yokohama",
  location: "Yokohama, Japan",
  country: "Japan",
  starRating: 4,
  description: "Skyline hotel in Yokohama offering panoramic views of the city, modern accommodations, and easy access to waterfront attractions and shopping malls.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},
{
  name: "Traditional Guesthouse in Takayama",
  location: "Takayama, Japan",
  country: "Japan",
  starRating: 3,
  description: "Traditional guesthouse in Takayama offering authentic accommodations, wooden architecture, and cultural experiences near historic streets and sake breweries.",
  price: {
      min: 300,
      max: 600
  },
  image: "traditional"
},
{
  name: "Luxury Hotel in Shibuya",
  location: "Shibuya, Tokyo, Japan",
  country: "Japan",
  starRating: 5,
  description: "Luxury hotel in the heart of Shibuya offering opulent accommodations, panoramic city views, and exclusive amenities near shopping centers, restaurants, and nightlife.",
  price: {
      min: 600,
      max: 1200
  },
  image: "cityscape"
},
{
  name: "Boutique Ryokan in Asakusa",
  location: "Asakusa, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Boutique ryokan in historic Asakusa offering stylish accommodations, traditional tatami rooms, and cultural experiences near Senso-ji Temple, Nakamise Shopping Street, and Tokyo Skytree.",
  price: {
      min: 400,
      max: 800
  },
  image: "ryokan"
},
{
  name: "Modern Apartment in Shinjuku",
  location: "Shinjuku, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Modern apartment in vibrant Shinjuku offering sleek accommodations, city skyline views, and a convenient location near Shinjuku Gyoen Park, Kabukicho, and department stores.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},
{
  name: "Design Hotel in Ginza",
  location: "Ginza, Tokyo, Japan",
  country: "Japan",
  starRating: 5,
  description: "Design hotel in upscale Ginza offering chic accommodations, cutting-edge design, and upscale dining options near luxury boutiques, art galleries, and theaters.",
  price: {
      min: 600,
      max: 1200
  },
  image: "city"
},
{
  name: "Traditional Inn in Yanaka",
  location: "Yanaka, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Traditional inn in charming Yanaka offering cozy accommodations, tatami rooms, and a nostalgic atmosphere near Yanaka Cemetery, Yanaka Ginza Shopping Street, and Nezu Shrine.",
  price: {
      min: 300,
      max: 600
  },
  image: "traditional"
},
{
  name: "Budget Hostel in Ueno",
  location: "Ueno, Tokyo, Japan",
  country: "Japan",
  starRating: 2,
  description: "Budget hostel in lively Ueno offering affordable accommodations, shared dormitories, and a social atmosphere near Ueno Park, Ameyoko Market, and museums.",
  price: {
      min: 200,
      max: 400
  },
  image: "city"
},
{
  name: "Artistic Guesthouse in Nakameguro",
  location: "Nakameguro, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Artistic guesthouse in trendy Nakameguro offering unique accommodations, creative decor, and a bohemian vibe near Meguro River, indie boutiques, and hip cafes.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Rooftop Capsule Hotel in Akihabara",
  location: "Akihabara, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Rooftop capsule hotel in bustling Akihabara offering compact accommodations, city views, and a futuristic experience near electronics stores, anime shops, and gaming centers.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Historic Ryokan in Kagurazaka",
  location: "Kagurazaka, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Historic ryokan in charming Kagurazaka offering traditional accommodations, cultural events, and gourmet dining experiences near cobblestone streets, French bakeries, and shrines.",
  price: {
      min: 400,
      max: 800
  },
  image: "traditional"
},
{
  name: "Family-Friendly Hotel in Odaiba",
  location: "Odaiba, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Family-friendly hotel in futuristic Odaiba offering spacious accommodations, themed rooms, and entertainment options near shopping malls, amusement parks, and waterfront attractions.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},
{
  name: "Business Hotel in Marunouchi",
  location: "Marunouchi, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Business hotel in central Marunouchi offering convenient accommodations, meeting facilities, and easy access to Tokyo Station, financial institutions, and government offices.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Modern Hotel in Roppongi",
  location: "Roppongi, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Modern hotel in vibrant Roppongi offering stylish accommodations, city views, and a lively atmosphere near nightlife venues, art galleries, and international cuisine.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},
{
  name: "Chic Apartment in Harajuku",
  location: "Harajuku, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Chic apartment in trendy Harajuku offering comfortable accommodations, fashion-forward design, and a central location near Takeshita Street, Yoyogi Park, and quirky cafes.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Traditional Guesthouse in Yanaka",
  location: "Yanaka, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Traditional guesthouse in charming Yanaka offering cozy accommodations, tatami rooms, and a nostalgic atmosphere near Yanaka Cemetery, Yanaka Ginza Shopping Street, and Nezu Shrine.",
  price: {
      min: 300,
      max: 600
  },
  image: "traditional"
},
{
  name: "Boutique Hotel in Shimokitazawa",
  location: "Shimokitazawa, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Boutique hotel in eclectic Shimokitazawa offering stylish accommodations, artistic flair, and a bohemian vibe near vintage shops, indie theaters, and live music venues.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},
{
  name: "Sleek Capsule Hotel in Ginza",
  location: "Ginza, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Sleek capsule hotel in upscale Ginza offering compact accommodations, modern amenities, and a convenient location near luxury boutiques, department stores, and fine dining.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Riverside Ryokan in Sumida",
  location: "Sumida, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Riverside ryokan in Sumida offering traditional accommodations, serene views, and cultural experiences near Sumida River, Tokyo Skytree, and Edo-Tokyo Museum.",
  price: {
      min: 400,
      max: 800
  },
  image: "ryokan"
},
{
  name: "Urban Retreat in Otemachi",
  location: "Otemachi, Tokyo, Japan",
  country: "Japan",
  starRating: 4,
  description: "Urban retreat in central Otemachi offering sophisticated accommodations, cityscape views, and a peaceful ambiance near business districts, gardens, and historical sites.",
  price: {
      min: 400,
      max: 800
  },
  image: "city"
},
{
  name: "Cozy Guesthouse in Koenji",
  location: "Koenji, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Cozy guesthouse in laid-back Koenji offering comfortable accommodations, communal spaces, and a bohemian atmosphere near vintage shops, live music venues, and local eateries.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Modern Apartment in Ikebukuro",
  location: "Ikebukuro, Tokyo, Japan",
  country: "Japan",
  starRating: 3,
  description: "Modern apartment in bustling Ikebukuro offering convenient accommodations, urban convenience, and a vibrant atmosphere near shopping centers, entertainment complexes, and cultural attractions.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Artistic Hostel in Kichijoji",
  location: "Kichijoji, Tokyo, Japan",
  country: "Japan",
  starRating: 2,
  description: "Artistic hostel in bohemian Kichijoji offering budget-friendly accommodations, creative decor, and a laid-back vibe near Inokashira Park, Ghibli Museum, and indie shops.",
  price: {
      min: 200,
      max: 400
  },
  image: "city"
}
];
console.log(japanHotels);

// South Afrika
const southAfricaHotels = [
  {
      name: "Luxury Safari Lodge in Kruger National Park",
      location: "Kruger National Park, South Africa",
      country: "South Africa",
      starRating: 5,
      description: "Luxury safari lodge in Kruger National Park offering exclusive accommodations, wildlife experiences, and breathtaking views of the African savannah.",
      price: {
          min: 800,
          max: 1500
      },
      image: "safari"
  },
  {
      name: "Beachfront Resort in Cape Town",
      location: "Cape Town, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Beachfront resort in Cape Town offering elegant accommodations, panoramic ocean views, and easy access to pristine beaches, restaurants, and attractions.",
      price: {
          min: 600,
          max: 1200
      },
      image: "beach"
  },
  {
      name: "Vineyard Retreat in Stellenbosch",
      location: "Stellenbosch, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Vineyard retreat in Stellenbosch offering charming accommodations, lush vineyard views, and wine tasting experiences near award-winning wineries and gourmet restaurants.",
      price: {
          min: 500,
          max: 1000
      },
      image: "vineyard"
  },
  {
      name: "Urban Boutique Hotel in Johannesburg",
      location: "Johannesburg, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Urban boutique hotel in Johannesburg offering stylish accommodations, city skyline views, and a central location near cultural attractions, shopping malls, and dining.",
      price: {
          min: 500,
          max: 1000
      },
      image: "city"
  },
  {
      name: "Mountain Lodge in Drakensberg",
      location: "Drakensberg, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Mountain lodge in the Drakensberg offering cozy accommodations, majestic mountain views, and outdoor adventures near hiking trails, waterfalls, and nature reserves.",
      price: {
          min: 400,
          max: 800
      },
      image: "mountain"
  },
  {
      name: "Historic Guesthouse in Franschhoek",
      location: "Franschhoek, South Africa",
      country: "South Africa",
      starRating: 3,
      description: "Historic guesthouse in Franschhoek offering comfortable accommodations, colonial charm, and a quaint atmosphere near gourmet restaurants, art galleries, and wine estates.",
      price: {
          min: 300,
          max: 600
      },
      image: "countryside"
  },
  {
      name: "Seaside Villa in Durban",
      location: "Durban, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Seaside villa in Durban offering luxurious accommodations, direct beach access, and stunning ocean views near surfing spots, beachfront promenades, and cultural attractions.",
      price: {
          min: 600,
          max: 1200
      },
      image: "beach"
  },
  {
      name: "Safari Camp in Madikwe Game Reserve",
      location: "Madikwe Game Reserve, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Safari camp in Madikwe Game Reserve offering tented accommodations, guided game drives, and wildlife encounters in a pristine wilderness setting.",
      price: {
          min: 600,
          max: 1200
      },
      image: "safari"
  },
  {
      name: "Coastal Retreat in Hermanus",
      location: "Hermanus, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Coastal retreat in Hermanus offering serene accommodations, whale watching opportunities, and scenic coastal walks near cliffs, beaches, and marine reserves.",
      price: {
          min: 500,
          max: 1000
      },
      image: "coast"
  },
  {
      name: "Country Estate in Midlands",
      location: "Midlands, South Africa",
      country: "South Africa",
      starRating: 4,
      description: "Country estate in Midlands offering luxurious accommodations, rolling hills views, and outdoor activities near historic towns, craft markets, and nature reserves.",
      price: {
          min: 500,
          max: 1000
      },
      image: "countryside"
  },
  {
    name: "Safari Lodge in Hluhluwe-Imfolozi Park",
    location: "Hluhluwe-Imfolozi Park, South Africa",
    country: "South Africa",
    starRating: 4,
    description: "Safari lodge in Hluhluwe-Imfolozi Park offering rustic accommodations, game viewing opportunities, and bushveld experiences near wildlife reserves, ancient forests, and Zulu culture.",
    price: {
        min: 500,
        max: 1000
    },
    image: "safari"
},
{
    name: "Oceanfront Guesthouse in Knysna",
    location: "Knysna, South Africa",
    country: "South Africa",
    starRating: 4,
    description: "Oceanfront guesthouse in Knysna offering comfortable accommodations, scenic views, and coastal charm near lagoons, forests, and outdoor adventures like hiking and boating.",
    price: {
        min: 400,
        max: 800
    },
    image: "coast"
},
{
    name: "Rural Farmstay in Swellendam",
    location: "Swellendam, South Africa",
    country: "South Africa",
    starRating: 3,
    description: "Rural farmstay in Swellendam offering cozy accommodations, farm activities, and tranquility amidst rolling farmlands, vineyards, and historical landmarks.",
    price: {
        min: 300,
        max: 600
    },
    image: "countryside"
},
{
    name: "Riverfront Lodge in Blyde River Canyon",
    location: "Blyde River Canyon, South Africa",
    country: "South Africa",
    starRating: 4,
    description: "Riverfront lodge in Blyde River Canyon offering scenic accommodations, river views, and outdoor adventures near majestic cliffs, waterfalls, and nature reserves.",
    price: {
        min: 500,
        max: 1000
    },
    image: "river"
},
{
    name: "Urban Loft in Johannesburg CBD",
    location: "Johannesburg CBD, South Africa",
    country: "South Africa",
    starRating: 3,
    description: "Urban loft in Johannesburg CBD offering modern accommodations, city skyline views, and urban convenience near cultural attractions, markets, and dining venues.",
    price: {
        min: 300,
        max: 600
    },
    image: "city"
},
{
    name: "Eco-Friendly Lodge in Addo Elephant Park",
    location: "Addo Elephant Park, South Africa",
    country: "South Africa",
    starRating: 4,
    description: "Eco-friendly lodge in Addo Elephant Park offering sustainable accommodations, wildlife experiences, and conservation activities near elephant herds, game drives, and birdwatching.",
    price: {
        min: 500,
        max: 1000
    },
    image: "safari"
},
{
    name: "Historic Manor in Grahamstown",
    location: "Grahamstown, South Africa",
    country: "South Africa",
    starRating: 3,
    description: "Historic manor in Grahamstown offering elegant accommodations, colonial charm, and a glimpse into South Africa's past near museums, universities, and cultural festivals.",
    price: {
        min: 300,
        max: 600
    },
    image: "countryside"
},
{
    name: "Secluded Cottage in Cederberg Mountains",
    location: "Cederberg Mountains, South Africa",
    country: "South Africa",
    starRating: 3,
    description: "Secluded cottage in Cederberg Mountains offering cozy accommodations, mountain views, and outdoor adventures near hiking trails, rock formations, and indigenous flora.",
    price: {
        min: 300,
        max: 600
    },
    image: "mountain"
},
{
    name: "Rustic Cabin in Hogsback",
    location: "Hogsback, South Africa",
    country: "South Africa",
    starRating: 2,
    description: "Rustic cabin in Hogsback offering simple accommodations, forest views, and a tranquil atmosphere near waterfalls, indigenous forests, and mystical landscapes.",
    price: {
        min: 200,
        max: 400
    },
    image: "countryside"
},
{
    name: "Coastal Lodge in Plettenberg Bay",
    location: "Plettenberg Bay, South Africa",
    country: "South Africa",
    starRating: 4,
    description: "Coastal lodge in Plettenberg Bay offering comfortable accommodations, ocean vistas, and coastal activities near sandy beaches, nature reserves, and marine wildlife.",
    price: {
        min: 500,
        max: 1000
    },
    image: "beach"
},
{
  name: "Mountain Retreat in the Drakensberg",
  location: "Drakensberg, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Mountain retreat in the Drakensberg offering cozy accommodations, scenic views, and outdoor activities near hiking trails, waterfalls, and nature reserves.",
  price: {
      min: 300,
      max: 600
  },
  image: "mountain"
},
{
  name: "Seaside Guesthouse in Hermanus",
  location: "Hermanus, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Seaside guesthouse in Hermanus offering comfortable accommodations, ocean views, and whale watching opportunities near scenic coastal walks, beaches, and nature reserves.",
  price: {
      min: 300,
      max: 600
  },
  image: "coast"
},
{
  name: "Rural Farmstay in the Karoo",
  location: "Karoo, South Africa",
  country: "South Africa",
  starRating: 2,
  description: "Rural farmstay in the Karoo offering rustic accommodations, farm experiences, and tranquility amidst vast plains, starry skies, and unique flora and fauna.",
  price: {
      min: 200,
      max: 400
  },
  image: "countryside"
},
{
  name: "Urban Apartment in Durban CBD",
  location: "Durban CBD, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Urban apartment in Durban CBD offering convenient accommodations, city views, and access to beaches, shopping malls, and cultural attractions.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Riverside Lodge in Sabie",
  location: "Sabie, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Riverside lodge in Sabie offering tranquil accommodations, river views, and outdoor adventures near waterfalls, forests, and scenic drives.",
  price: {
      min: 300,
      max: 600
  },
  image: "river"
},
{
  name: "Cozy Cabin in Hogsback",
  location: "Hogsback, South Africa",
  country: "South Africa",
  starRating: 2,
  description: "Cozy cabin in Hogsback offering simple accommodations, forest views, and a serene atmosphere near hiking trails, waterfalls, and mystical landscapes.",
  price: {
      min: 200,
      max: 400
  },
  image: "countryside"
},
{
  name: "Beachside Villa in Port Elizabeth",
  location: "Port Elizabeth, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Beachside villa in Port Elizabeth offering luxurious accommodations, direct beach access, and panoramic ocean views near wildlife reserves, golf courses, and cultural sites.",
  price: {
      min: 500,
      max: 1000
  },
  image: "beach"
},
{
  name: "Historic Hotel in Graaff-Reinet",
  location: "Graaff-Reinet, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Historic hotel in Graaff-Reinet offering elegant accommodations, colonial charm, and a glimpse into South Africa's past near museums, galleries, and heritage sites.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Lodge in the Waterberg",
  location: "Waterberg, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Lodge in the Waterberg offering comfortable accommodations, wildlife experiences, and outdoor activities near game reserves, hiking trails, and cultural villages.",
  price: {
      min: 300,
      max: 600
  },
  image: "safari"
},
{
  name: "Rural Guesthouse in Oudtshoorn",
  location: "Oudtshoorn, South Africa",
  country: "South Africa",
  starRating: 2,
  description: "Rural guesthouse in Oudtshoorn offering affordable accommodations, warm hospitality, and proximity to ostrich farms, caves, and nature reserves.",
  price: {
      min: 200,
      max: 400
  },
  image: "countryside"
},
{
  name: "Rustic Lodge in the Eastern Cape",
  location: "Eastern Cape, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Rustic lodge in the Eastern Cape offering cozy accommodations, tranquil surroundings, and outdoor activities near game reserves, beaches, and cultural sites.",
  price: {
      min: 300,
      max: 600
  },
  image: "countryside"
},
{
  name: "Boutique Hotel in Mossel Bay",
  location: "Mossel Bay, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Boutique hotel in Mossel Bay offering stylish accommodations, ocean views, and a relaxed atmosphere near beaches, golf courses, and historical landmarks.",
  price: {
      min: 400,
      max: 800
  },
  image: "beach"
},
{
  name: "Safari Camp in Phinda Private Game Reserve",
  location: "Phinda Private Game Reserve, South Africa",
  country: "South Africa",
  starRating: 5,
  description: "Safari camp in Phinda Private Game Reserve offering luxury tented accommodations, guided game drives, and wildlife encounters in an exclusive wilderness setting.",
  price: {
      min: 800,
      max: 1500
  },
  image: "safari"
},
{
  name: "Coastal Resort in Umhlanga",
  location: "Umhlanga, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Coastal resort in Umhlanga offering upscale accommodations, beachfront location, and resort amenities near shopping malls, restaurants, and entertainment venues.",
  price: {
      min: 600,
      max: 1200
  },
  image: "beach"
},
{
  name: "Mountain Chalet in the Cederberg",
  location: "Cederberg, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Mountain chalet in the Cederberg offering cozy accommodations, breathtaking views, and outdoor adventures near hiking trails, rock formations, and indigenous flora.",
  price: {
      min: 300,
      max: 600
  },
  image: "mountain"
},
{
  name: "Historic Guesthouse in Kimberley",
  location: "Kimberley, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Historic guesthouse in Kimberley offering comfortable accommodations, Victorian charm, and a glimpse into diamond mining history near museums, theaters, and art galleries.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Secluded Retreat in Wilderness",
  location: "Wilderness, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Secluded retreat in Wilderness offering exclusive accommodations, forest views, and outdoor activities near beaches, lakes, and nature reserves.",
  price: {
      min: 500,
      max: 1000
  },
  image: "countryside"
},
{
  name: "Riverside Lodge in Parys",
  location: "Parys, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Riverside lodge in Parys offering comfortable accommodations, riverfront location, and outdoor adventures near white-water rafting, fishing, and golf courses.",
  price: {
      min: 300,
      max: 600
  },
  image: "river"
},
{
  name: "City Apartment in Pretoria",
  location: "Pretoria, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "City apartment in Pretoria offering modern accommodations, urban convenience, and access to museums, parks, and government buildings.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Coastal Cottage in Sedgefield",
  location: "Sedgefield, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Coastal cottage in Sedgefield offering self-catering accommodations, beach access, and a laid-back atmosphere near lagoons, forests, and outdoor markets.",
  price: {
      min: 300,
      max: 600
  },
  image: "beach"
},
{
  name: "Hilltop Lodge in Nelspruit",
  location: "Nelspruit, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Hilltop lodge in Nelspruit offering panoramic views, comfortable accommodations, and easy access to Kruger National Park, waterfalls, and cultural attractions.",
  price: {
      min: 400,
      max: 800
  },
  image: "mountain"
},
{
  name: "Coastal Resort in Ballito",
  location: "Ballito, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Coastal resort in Ballito offering luxury accommodations, beachfront location, and resort amenities near golf courses, shopping centers, and family attractions.",
  price: {
      min: 500,
      max: 1000
  },
  image: "beach"
},
{
  name: "Historic Hotel in Stellenbosch",
  location: "Stellenbosch, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Historic hotel in Stellenbosch offering elegant accommodations, Cape Dutch architecture, and wine country experiences near vineyards, art galleries, and gourmet restaurants.",
  price: {
      min: 500,
      max: 1000
  },
  image: "vineyard"
},
{
  name: "Bushveld Retreat in Hoedspruit",
  location: "Hoedspruit, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Bushveld retreat in Hoedspruit offering rustic accommodations, wildlife sightings, and nature experiences near game reserves, conservation projects, and cultural villages.",
  price: {
      min: 300,
      max: 600
  },
  image: "safari"
},
{
  name: "Mountain Chalet in Clarens",
  location: "Clarens, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Mountain chalet in Clarens offering cozy accommodations, mountain views, and outdoor adventures near hiking trails, art galleries, and craft breweries.",
  price: {
      min: 300,
      max: 600
  },
  image: "mountain"
},
{
  name: "Safari Lodge in Pilanesberg National Park",
  location: "Pilanesberg National Park, South Africa",
  country: "South Africa",
  starRating: 5,
  description: "Safari lodge in Pilanesberg National Park offering luxury accommodations, Big Five game viewing, and exclusive safari experiences in a malaria-free wilderness area.",
  price: {
      min: 800,
      max: 1500
  },
  image: "safari"
},
{
  name: "Coastal Retreat in Plettenberg Bay",
  location: "Plettenberg Bay, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Coastal retreat in Plettenberg Bay offering upscale accommodations, ocean views, and beachfront access near marine reserves, hiking trails, and adventure activities.",
  price: {
      min: 500,
      max: 1000
  },
  image: "beach"
},
{
  name: "Historic Guesthouse in Graaff-Reinet",
  location: "Graaff-Reinet, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Historic guesthouse in Graaff-Reinet offering comfortable accommodations, Victorian charm, and a glimpse into South Africa's past near museums, galleries, and heritage sites.",
  price: {
      min: 300,
      max: 600
  },
  image: "city"
},
{
  name: "Safari Camp in Kruger National Park",
  location: "Kruger National Park, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Safari camp in Kruger National Park offering tented accommodations, guided game drives, and wildlife encounters in one of Africa's premier safari destinations.",
  price: {
      min: 600,
      max: 1200
  },
  image: "safari"
},
{
  name: "Cozy Cabin in the Drakensberg",
  location: "Drakensberg, South Africa",
  country: "South Africa",
  starRating: 2,
  description: "Cozy cabin in the Drakensberg offering simple accommodations, mountain views, and a peaceful atmosphere near hiking trails, waterfalls, and rock art sites.",
  price: {
      min: 200,
      max: 400
  },
  image: "mountain"
},
{
  name: "Beach House in Hermanus",
  location: "Hermanus, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Beach house in Hermanus with luxurious accommodations, panoramic ocean views, and proximity to whale watching spots, restaurants, and wineries.",
  price: {
      min: 600,
      max: 1200
  },
  image: "beach"
},
{
  name: "Forest Cabin in Tsitsikamma National Park",
  location: "Tsitsikamma National Park, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Forest cabin in Tsitsikamma National Park offering rustic accommodations surrounded by lush vegetation, hiking trails, and waterfalls.",
  price: {
      min: 300,
      max: 600
  },
  image: "forest"
},
{
  name: "City Hotel in Cape Town",
  location: "Cape Town, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "City hotel in Cape Town with stylish rooms, Table Mountain views, and a central location near attractions like the V&A Waterfront and Cape Point.",
  price: {
      min: 500,
      max: 1000
  },
  image: "city"
},
{
  name: "Winery Resort in Franschhoek",
  location: "Franschhoek, South Africa",
  country: "South Africa",
  starRating: 5,
  description: "Winery resort in Franschhoek with exclusive accommodations, wine tastings, gourmet restaurants, and views of the surrounding vineyards.",
  price: {
      min: 700,
      max: 1500
  },
  image: "vineyard"
},
{
  name: "Safari Lodge in Sabi Sands Game Reserve",
  location: "Sabi Sands Game Reserve, South Africa",
  country: "South Africa",
  starRating: 5,
  description: "Safari lodge in Sabi Sands Game Reserve offering luxury suites, private safaris, and encounters with the Big Five in a renowned private wildlife reserve.",
  price: {
      min: 800,
      max: 1500
  },
  image: "safari"
},
{
  name: "Mountain Chalet in Hogsback",
  location: "Hogsback, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Mountain chalet in Hogsback offering cozy accommodations surrounded by lush forests, hiking trails, and waterfalls.",
  price: {
      min: 300,
      max: 600
  },
  image: "mountain"
},
{
  name: "Beach Bungalow in Plettenberg Bay",
  location: "Plettenberg Bay, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Beach bungalow in Plettenberg Bay with simple yet cozy accommodations, direct beach access, and ocean views.",
  price: {
      min: 300,
      max: 600
  },
  image: "beach"
},
{
  name: "Historic Guesthouse in Swellendam",
  location: "Swellendam, South Africa",
  country: "South Africa",
  starRating: 3,
  description: "Historic guesthouse in Swellendam with charming rooms, historic ambiance, and a peaceful atmosphere amidst gardens and national parks.",
  price: {
      min: 300,
      max: 600
  },
  image: "countryside"
},
{
  name: "Mountain Lodge in Montagu",
  location: "Montagu, South Africa",
  country: "South Africa",
  starRating: 4,
  description: "Mountain lodge in Montagu with comfortable accommodations, views of the surrounding mountains, and access to hot springs and wineries.",
  price: {
      min: 400,
      max: 800
  },
  image: "mountain"
}
];
console.log(southAfricaHotels);

// Egypt






// All hotels
let hotels = [
  austriaHotels, 
  germanyHotels,
  franceHotels,
  italyHotels,
  spainHotels,
  ukHotels,
  usHotels,
  canadaHotels,
  australiaHotels,
  brazilHotels,
  argentinaHotels,
  mexicoHotels,
  japanHotels,
  southAfricaHotels,
]


let hotelCouner = 0;
for (let i = 0; i < hotels.length; i++) {
  for (let j = 0; j < hotels[i].length; j++) {
    // console.log(hotels[i][j].location);
    hotelCouner++;
  }
}
console.log(hotelCouner);
const example = {
  address_components: [
    { long_name: '8035', short_name: '8035', types: ['street_number'] },
    { long_name: 'Market Street', short_name: 'Market St', types: ['route'] },
    { long_name: 'Wilmington', short_name: 'Wilmington', types: ['locality', 'political'] },
    {
      long_name: 'New Hanover County',
      short_name: 'New Hanover County',
      types: ['administrative_area_level_2', 'political'],
    },
    {
      long_name: 'North Carolina',
      short_name: 'NC',
      types: ['administrative_area_level_1', 'political'],
    },
    { long_name: 'United States', short_name: 'US', types: ['country', 'political'] },
    { long_name: '28411', short_name: '28411', types: ['postal_code'] },
  ],
  adr_address:
    '<span class="street-address">8035 Market St</span>, <span class="locality">Wilmington</span>, <span class="region">NC</span> <span class="postal-code">28411</span>, <span class="country-name">USA</span>',
  business_status: 'OPERATIONAL',
  formatted_address: '8035 Market St, Wilmington, NC 28411, USA',
  formatted_phone_number: '(910) 686-2007',
  geometry: {
    location: { lat: 34.29598039999999, lng: -77.7990662 },
    viewport: {
      northeast: { lat: 34.29727833029149, lng: -77.79729346970849 },
      southwest: { lat: 34.29458036970849, lng: -77.7999914302915 },
    },
  },
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
  icon_background_color: '#FF9E67',
  icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
  international_phone_number: '+1 910-686-2007',
  name: 'Subway',
  opening_hours: {
    open_now: true,
    periods: [
      { close: { day: 0, time: '1930' }, open: { day: 0, time: '1000' } },
      { close: { day: 1, time: '1930' }, open: { day: 1, time: '1000' } },
      { close: { day: 2, time: '1930' }, open: { day: 2, time: '1000' } },
      { close: { day: 3, time: '1930' }, open: { day: 3, time: '1000' } },
      { close: { day: 4, time: '1930' }, open: { day: 4, time: '1000' } },
      { close: { day: 5, time: '1930' }, open: { day: 5, time: '1000' } },
      { close: { day: 6, time: '1930' }, open: { day: 6, time: '1000' } },
    ],
    weekday_text: [
      'Monday: 10:00 AM – 7:30 PM',
      'Tuesday: 10:00 AM – 7:30 PM',
      'Wednesday: 10:00 AM – 7:30 PM',
      'Thursday: 10:00 AM – 7:30 PM',
      'Friday: 10:00 AM – 7:30 PM',
      'Saturday: 10:00 AM – 7:30 PM',
      'Sunday: 10:00 AM – 7:30 PM',
    ],
  },
  photos: [
    {
      height: 766,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uEAumycZukJQuknr-y4ePdeOmH6SlddFisMRc04_R4fSP7_NMsgcQ9_A9ENixUm45uVlS9kUAlL6zpzKhNrOKHIcqGaSJStvI-Lqkez1h-wxUQGKTYDj9oklSkI-Q3AW1hP1C5D2yDG51Amu7hfiVpqJKEvZjCl5_SM1VkbfSkJIix-I',
      width: 766,
    },
    {
      height: 1300,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uEBaZQO5qMpD2eN8geDiH8P3ShkRrw6ZWWXAxe2YsQPFF88KuhfMTTSnNVn2eZ9iO5YXZV8lWadk8EV27NfIWvoFslLAjiFpSvcLB_1UfmGODyV1meiYXP6ilmGBFa4rJf6rwteYjxKb5jm1ZlkQzqNPeaArWd6MHcxtUyyLgelCilvE',
      width: 1301,
    },
    {
      height: 999,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uED_JU0k3vux6JF8cfWP8R5tNXZk_zxcRewfbjYucX4N8ghZH-7ApB-cTfLlABG6Ew0sFzNGFG_wyI4mRxmj7I01qam_io4Ga-48spgu6ZRQn4QzjTuwDrfLeZpU03ZLEE9gLqGl-wszmhoJrWTacrFoI_Hj5IY3S5W3EBvB7msN7bII',
      width: 999,
    },
    {
      height: 918,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uEC92EwHBaMBYu0bUbIVH073bTtgM2zsGfruCwNARD6ukkjAIFcBMuxKSLlEcs2xtTwt4RsRirNMc6sX2XSQ9DYBCGY1Wb_ardTABpjAcfNGkWZm21MWUGBIwwT4jbSLKHKgCYke7bXxyP7oNekSHnb4RNA405Ue4voj07240uw3HOz9',
      width: 918,
    },
    {
      height: 1301,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uEDCX-rJrWYOj1L56Zxu_VMzO0bJaZ3-Xt8lesM565pr2C9e55Zh9a-E10YAAE8PFZcV6jLO1dtVb1QEibt4wJyLJ2sgbYcG2VWzeZfTfAT6g5cHPtYPThjN5WQ6cqmg8rPxVIew_iavUol5in-oMQc0IvlUmI4ALD5Bnrx5R-Dyo5Zr',
      width: 1302,
    },
    {
      height: 260,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uEBjCQXnMgGIMu27Rn8TGSQMMh7ERvk3T2-1hcwL_1ShckjA1GHLb1roXsI2g4pUzOvsri0lTB8qeL3jVMcqTbeCLjS_4NzljueoqXJJX9WrIewwrNjjZSV5MbwuMUezaMrKeonXvJOSXnEnRTbCPks9AXRzY2SADvvLRAwgViiSCxep',
      width: 260,
    },
    {
      height: 1763,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uEDaZPmhCGjd1W8JAyzYt5uidLHuGHKbk1KPWZspuoZlSZ8M5ght27pwT4gTap3PcpAaGZ2UuT_rTNgpKjq8pYbGoTCNdHhPgkz4h_EiAEzNGgeKC3sBTasJjKlkG8PeZZAFRhqXp2SD7zFEJTjgryHdFovqBWeMvWdDQbWLxBCIsVEL',
      width: 1763,
    },
    {
      height: 940,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/116974477847692176196">Subway</a>',
      ],
      photo_reference:
        'Aap_uEDrKcINKhjfCKRHIMOJPg504g1kd6tcK9QvYTHBWW4hHEmjS6ul7kzhAowQqLu5VhGhxOFKshZKsitE3S_m5CSFiMb8g9tARqE-Liv6cQ-D4y8nE8cGDemdfgANncIFhfa7VndNPmVi_cPVeKyMn-AYrnQWShLuQgKlGc-hgiUYxu5Z',
      width: 940,
    },
  ],
  place_id: 'ChIJRSxrOVaMqYkR4gvdLGnbNV0',
  plus_code: { compound_code: '76W2+99 Wilmington, NC, USA', global_code: '876476W2+99' },
  price_level: 1,
  rating: 3.5,
  reference: 'ChIJRSxrOVaMqYkR4gvdLGnbNV0',
  reviews: [
    {
      author_name: 'Cari Brinegar',
      author_url: 'https://www.google.com/maps/contrib/118022614088096696474/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/AOh14GhfJdUv4kNObl-2rGA3lNiZUhmAGeWSdM6s1rA=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '4 months ago',
      text: 'I went Sat. Night and had the kindest person wait on me. She was so patient and wore a huge smile. The health rating is 97. Very proud of them for doing an excellent job. You can tell the management and staff take this job seriously.',
      time: 1615900518,
    },
    {
      author_name: 'Macey Hendricks',
      author_url: 'https://www.google.com/maps/contrib/116241415272829767631/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/AATXAJymChAsrKa558cz2iqsGTBVIWQoR52DLlVPWQQX=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '2 years ago',
      text: 'I absolutely had the best time today. The girls that served me were very friendly and talkative. I felt very welcomed and their service was also very quick and neat. Definitely will be stopping in more often!!',
      time: 1562881058,
    },
    {
      author_name: 'Bobby Sipple',
      author_url: 'https://www.google.com/maps/contrib/116949797472830902285/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/AATXAJx4JcB5pgoy-x9nVyqBJvWsqKLnAdlU2Z7Mcpa6pg=s128-c0x00000000-cc-rp-mo-ba3',
      rating: 5,
      relative_time_description: '8 months ago',
      text: 'Very very good',
      time: 1606677688,
    },
    {
      author_name: 'Mike',
      author_url: 'https://www.google.com/maps/contrib/101867563038320067273/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/AOh14GjFhoq6lSfMI_il1aLyaPZHdNgfRBWfcZMLCRlD9A=s128-c0x00000000-cc-rp-mo',
      rating: 1,
      relative_time_description: 'a year ago',
      text: "Won't go back.  Last time I was in here person making the sandwiches was coughing and sneezing.   How can you have someone that's sick making subs?   Nasty.  Time before that the lettuce and the tomato were way past fresh.",
      time: 1573819501,
    },
    {
      author_name: 'andreopoulosa',
      author_url: 'https://www.google.com/maps/contrib/102536776878956306748/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/AATXAJxgVrjnWv59j8etM7BN7V-DU7jHkEUtmex4DLnt=s128-c0x00000000-cc-rp-mo',
      rating: 1,
      relative_time_description: '2 years ago',
      text: 'The employee who helped us was extremely rude and sloppy,  and kept rolling her eyes. Is what it is for being in Walmart',
      time: 1557620483,
    },
  ],
  types: ['meal_takeaway', 'restaurant', 'food', 'point_of_interest', 'establishment'],
  url: 'https://maps.google.com/?cid=6716515664063695842',
  user_ratings_total: 13,
  utc_offset: -240,
  vicinity: '8035 Market Street, Wilmington',
  website:
    'https://restaurants.subway.com/united-states/nc/wilmington/8035-market-st?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=60848&utm_campaign=evergreen-2020&y_source=1_MTQ4OTUyNzYtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl',
};

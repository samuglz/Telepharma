import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      avatars: {
         avatarStyle: ['Transparent'],
         accessoriesType: [
            'Blank',
            'Kurt',
            'Prescription01',
            'Prescription02',
            'Round',
            'Sunglasses',
            'Wayfarers'
         ],
         clotheType: [
            'BlazerShirt',
            'BlazerSweater',
            'CollarSweater',
            'GraphicShirt',
            'Hoodie',
            'Overall',
            'ShirtCrewNeck',
            'ShirtScoopNeck',
            'ShirtVNeck'
         ],
         clotheColor: [
            'Black',
            'Blue01',
            'Blue02',
            'Blue03',
            'Gray01',
            'Gray02',
            'Heather',
            'PastelBlue',
            'PastelGreen',
            'PastelOrange',
            'PastelRed',
            'PastelYellow',
            'Pink',
            'Red',
            'White'
         ],
         eyebrowType: [
            'Angry',
            'AngryNatural',
            'Default',
            'DefaultNatural',
            'FlatNatural',
            'RaisedExcited',
            'RaisedExcitedNatural',
            'SadConcerned',
            'SadConcernedNatural',
            'UnibrowNatural',
            'UpDown',
            'UpDownNatural'
         ],
         eyeType: [
            'Close',
            'Cry',
            'Default',
            'Dizzy',
            'EyeRoll',
            'Happy',
            'Hearts',
            'Side',
            'Squint',
            'Surprised',
            'Wink',
            'WinkWacky'
         ],
         hairColor: [
            'Auburn',
            'Black',
            'Blonde',
            'BlondeGolden',
            'Brown',
            'BrownDark',
            'PastelPink',
            'Platinum',
            'Red',
            'SilverGray'
         ],
         facialHairType: [
            'Blank',
            'BeardMedium',
            'BeardLight',
            'BeardMagestic',
            'MoustacheFancy',
            'MoustacheMagnum'
         ],
         graphicType: [
            'Bat',
            'Cumbia',
            'Deer',
            'Diamond',
            'Hola',
            'Pizza',
            'Resist',
            'Selena',
            'Bear',
            'SkullOutline',
            'Skull'
         ],
         mouthType: [
            'Concerned',
            'Default',
            'Disbelief',
            'Eating',
            'Grimace',
            'Sad',
            'ScreamOpen',
            'Serious',
            'Smile',
            'Tongue',
            'Twinkle',
            'Vomit'
         ],
         skinColor: [
            'Tanned',
            'Yellow',
            'Pale',
            'Light',
            'Brown',
            'DarkBrown',
            'Black'
         ],
         topType: [
            'NoHair',
            'Eyepatch',
            'Hat',
            'Hijab',
            'Turban',
            'WinterHat1',
            'WinterHat2',
            'WinterHat3',
            'WinterHat4',
            'LongHairBigHair',
            'LongHairBob',
            'LongHairBun',
            'LongHairCurly',
            'LongHairCurvy',
            'LongHairDreads',
            'LongHairFrida',
            'LongHairFro',
            'LongHairFroBand',
            'LongHairNotTooLong',
            'LongHairShavedSides',
            'LongHairMiaWallace',
            'LongHairStraight',
            'LongHairStraight2',
            'LongHairStraightStrand',
            'ShortHairDreads01',
            'ShortHairDreads02',
            'ShortHairFrizzle',
            'ShortHairShaggyMullet',
            'ShortHairShortCurly',
            'ShortHairShortFlat',
            'ShortHairShortRound',
            'ShortHairShortWaved',
            'ShortHairSides',
            'ShortHairTheCaesar',
            'ShortHairTheCaesarSidePart'
         ]
      },
      isAuth: false,
      userID: null,
      cart: [
         {
            id: 1,
            name: 'Vindilioxacin',
            description:
               'Ut consequat semper viverra nam libero justo. Sit amet volutpat consequat mauris nunc congue. Risus quis varius quam quisque. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.',
            price: 7.78,
            skuStripe: 'sku_HDpSOjUgZnABgI',
            image:
               'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            quantity: 1
         },
         {
            id: 2,
            name: 'Vindilioxacin',
            description:
               'Ut consequat semper viverra nam libero justo. Sit amet volutpat consequat mauris nunc congue. Risus quis varius quam quisque. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.',
            price: 7.78,
            skuStripe: 'sku_HDpSOjUgZnABgI',
            image:
               'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            quantity: 3
         },
         {
            id: 2,
            name: 'Vindilioxacin',
            description:
               'Ut consequat semper viverra nam libero justo. Sit amet volutpat consequat mauris nunc congue. Risus quis varius quam quisque. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.',
            price: 7.78,
            skuStripe: 'sku_HDpSOjUgZnABgI',
            image:
               'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            quantity: 3
         },
         {
            id: 2,
            name: 'Vindilioxacin',
            description:
               'Ut consequat semper viverra nam libero justo. Sit amet volutpat consequat mauris nunc congue. Risus quis varius quam quisque. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.',
            price: 7.78,
            skuStripe: 'sku_HDpSOjUgZnABgI',
            image:
               'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            quantity: 3
         }
      ]
   },
   mutations: {
      setAuth(state, payload) {
         state.isAuth = payload;
      },
      setUserID(state, payload) {
         state.userID = payload;
      },
      deleteCartProduct(state, payload) {
         state.cart = state.cart.filter(product => {
            return product.id !== payload;
         });
      }
   },
   actions: {},
   modules: {}
});

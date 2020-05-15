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
      cart: []
   },
   getters: {
      totalPrice(state) {
         let count = 0;
         state.cart.forEach(product => {
            count += product.price * product.quantity;
         });
         return count;
      },
      totalUnits(state) {
         let count = 0;
         state.cart.forEach(product => {
            count += product.quantity;
         });
         return count;
      }
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
      },
      addCartProduct(state, payload) {
         state.cart.push(payload);
      }
   },
   actions: {},
   modules: {}
});

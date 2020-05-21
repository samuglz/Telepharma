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
      cart: [],
      userID: null
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
      },
      productsToPay(state) {
         let payment = [];
         state.cart.forEach(product => {
            payment.push({
               price: product.skuStripe,
               quantity: product.quantity
            });
         });
         return payment;
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
         localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      addCartProduct(state, payload) {
         let duplicate = false;
         let position = 0;
         state.cart.forEach((product, index) => {
            if (product.id === payload.id) {
               duplicate = true;
               position = index;
            }
         });
         duplicate
            ? (state.cart[position].quantity += payload.quantity)
            : state.cart.push(payload);
         localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      decrementCartProduct(state, payload) {
         state.cart.forEach(product => {
            if (product.id === payload.id) {
               product.quantity > 1 ? (product.quantity -= 1) : null;
            }
         });
         localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      resetCart(state) {
         state.cart = [];
         localStorage.setItem('cart', '');
      },
      setCart(state, payload) {
         state.cart = payload;
      }
   },
   actions: {},
   modules: {}
});

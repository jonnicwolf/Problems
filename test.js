// // // INPUT/OUTPUT
// // //icyHot(120, -1) → true
// // // icyHot(-1, 120) → true
// // // icyHot(2, 120) → false

// // //Problem -> Given two temperatures, return true if one is less than 0 and the other is greater than 100.
// // //Return -> Boolean

// // //less than? comparision <- conditional
// // //actually two comparisions
// // //I need to find out if 1/2 is less than 0 : meaning that number must be negative
// // // '' '' '' 2/2 is MORE than 100 : meaning 100+

// // const icyHot = (temp1, temp2) => {
// // //   if (temp1 > 100 || temp1 < 0) {
// // //     if (temp2 > 100 || temp2 < 0) {
// // //       return true;
// // //     }
// // //   } else if (temp1 === 100 || temp1 === 0) {
// // //     if (temp2 === 100 || temp2 === 0) {
// // //       return false;
// // //     }
// // //     return false;
// // //   } else {
// // //     return false;
// // //   }
// //     // switch (temp1, temp2) {
// //     //     case temp1 > 100 && temp2 < 0:
// //     //         return true
// //     //     default:
// //     //         return false
// //     // }
// //     if (temp1 > 100 || temp2 > 100) {
// //         if (temp1 < 0 || temp2 < 0) {
// //             return true
// //         }
// //     }
// //     else if (temp1 < 0 || temp2 < 0) {
// //         if (temp1 > 100 || temp2 > 100) {
// //             return true
// //         }
// //     }
    
// // };
// // console.log(icyHot(-1, 100));



// // [ '******' ]
// // [ '******', '|', '    ', '|' ]
// // [ '******', '|', '    ', '|', '|', '    ', '|' ]
// // [
// //   '******', '|','    ',   '|','|',      '    ','|',      '|','    ',   '|']
// // [
// //   '******', '|', '    ',
// //   '|',      '|', '    ',
// //   '|',      '|', '    ',
// //   '|',      '|', '    ',
// //   '|'
// // ]

// function firstNonRepeated(s){
//   //store the count in an object with letter keys ✅
//   let counter = {}
  
//   //count the letters ✅
//   for (let i = 0; i < s.length; i++){
    
//     //if the current letter of s exists as a key in counter
//     //increase it by 1
//     if (counter[s[i]]) {
//       counter[s[i]] += 1
//     } 
//     //if the current letter of s does NOT exist in counter
//     //make s[i] a key of counter *counter[s[i]]* equal to 1
//     else (counter[s[i]] = 1)    
//   } 
//   let newArr = Object.entries(counter)
  
//   //sort ✅
//   newArr.sort((a,b) => a[1] - b[1])  
  
//   //identify the letter/value with the count of 1 ✅
//   if (newArr[0][1] > 1) return null
//   else return newArr[0][0]
// }

// console.log(firstNonRepeated('test'))
// console.log(firstNonRepeated('kat'))
// console.log(firstNonRepeated('mississippi'))
// console.log(firstNonRepeated('aabbcc'))


// const alexis = {
//   eyes : 'green',
//   height: 62,
//   catchphrase: 'boc boc'
// }

// console.log(alexis.toebeans)

const dinosaurs = [
  {
    dinosaurId: "YLtkN9R37",
    name: "Allosaurus",
    pronunciation: "AL-oh-sore-us",
    meaningOfName: "other lizard",
    diet: "carnivorous",
    lengthInMeters: 12,
    period: "Late Jurassic",
    mya: [156, 144],
    info: "Allosaurus was an apex predator in the Late Jurassic in North America.",
  },
  {
    dinosaurId: "GGvO1X9Zeh",
    name: "Apatosaurus",
    pronunciation: "ah-PAT-oh-sore-us",
    meaningOfName: "deceptive lizard",
    diet: "herbivorous",
    lengthInMeters: 21,
    period: "Late Jurassic",
    mya: [154, 145],
    info: "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909.",
  },
  {
    dinosaurId: "BFjjLjea-O",
    name: "Brachiosaurus",
    pronunciation: "BRAK-ee-oh-sore-us",
    meaningOfName: "arm lizard",
    diet: "herbivorous",
    lengthInMeters: 30,
    period: "Late Jurassic",
    mya: [155, 140],
    info: "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening.",
  },
  {
    dinosaurId: "iOVNUcv-ww",
    name: "Compsognathus",
    pronunciation: "komp-sog-NATH-us",
    meaningOfName: "pretty jaw",
    diet: "carnivorous",
    lengthInMeters: 0.65,
    period: "Late Jurassic",
    mya: [145, 140],
    info: "Compsognathus was small and bipedal, roughly the size of a turkey. It lived in Europe and was the first dinosaur genus to be portrayed with feathers.",
  },
  {
    dinosaurId: "WHQcpcOj0G",
    name: "Dracorex",
    pronunciation: "dray-ko-rex",
    meaningOfName: "dragon king",
    diet: "herbivorous",
    lengthInMeters: 4,
    period: "Late Cretaceous",
    mya: [66],
    info: "Dracorex hogwartsia was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum.",
  },
  {
    dinosaurId: "GKl035EYKN",
    name: "Elasmosaurus",
    pronunciation: "ee-LAZ-mo-sore-us",
    meaningOfName: "thin plate lizard",
    diet: "carnivorous",
    lengthInMeters: 14,
    period: "Late Cretaceous",
    mya: [80.5],
    info: "Elasmosaurus was an aquatic dinosaur with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck.",
  },
  {
    dinosaurId: "V53DvdhV2A",
    name: "Giraffatitan",
    pronunciation: "ji-raf-e-tie-tan",
    meaningOfName: "giraffe titan",
    diet: "herbivorous",
    lengthInMeters: 23,
    period: "Late Jurassic",
    mya: [154, 142],
    info: "Giraffatitan was a large sauropod related to Brachiosaurus with huge nostrils and nasal openings in its skull.",
  },
  {
    dinosaurId: "2GglUqKT0G",
    name: "Indosuchus",
    pronunciation: "in-doh-sook-us",
    meaningOfName: "Indian crocodile",
    diet: "carnivorous",
    lengthInMeters: 7,
    period: "Late Cretaceous",
    mya: [70, 66],
    info: "Indosuchus had a flattened crest on its skull.",
  },
  {
    dinosaurId: "aIR95B2TWm",
    name: "Jingshanosaurus",
    pronunciation: "jing-shahn-oh-sore-us",
    meaningOfName: "Jingshan lizard",
    diet: "herbivorous",
    lengthInMeters: 5,
    period: "Early Jurassic",
    mya: [205, 190],
    info: "Jingshanosaurus was one of the last prosauropods, a long-necked herbivore able to walk on two legs.",
  },
  {
    dinosaurId: "Pr6kc4Q_Xf",
    name: "Khaan",
    pronunciation: "kahn",
    meaningOfName: "ruler",
    diet: "omnivorous",
    lengthInMeters: 1.8,
    period: "Late Cretaceous",
    mya: [81, 75],
    info: "Khaan was an oviraptor with a parrot-like beak, discovered in Mongolia.",
  },
  {
    dinosaurId: "GOycwH_EiU",
    name: "Minmi",
    pronunciation: "min-mie",
    meaningOfName: "Minmi Crossing, Queensland, Australia",
    diet: "herbivorous",
    lengthInMeters: 3,
    period: "Early Cretaceous",
    mya: [121, 112],
    info: "Minmi was a small, anklyosaurian, armored dinosaur discovered in Australia.",
  },
  {
    dinosaurId: "Lfp-pAYmDv",
    name: "Ouranosaurus",
    pronunciation: "oo-RAH-noh-sore-us",
    meaningOfName: "brave monitor lizard",
    diet: "herbivorous",
    lengthInMeters: 7,
    period: "Early Cretaceous",
    mya: [125, 112],
    info: "Ouranosaurus was an iguanodont dinosaur in Africa. It had a large sail on its back supported by long, wide neural spines and an elnogated, flat skull.",
  },
  {
    dinosaurId: "ft5Gs5izdq",
    name: "Parasaurolophus",
    pronunciation: "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
    meaningOfName: "near crested lizard",
    diet: "herbivorous",
    lengthInMeters: 11,
    period: "Late Cretaceous",
    mya: [76, 74],
    info: "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest.",
  },
  {
    dinosaurId: "JIj72eqrz6",
    name: "Spinosaurus",
    pronunciation: "SPINE-oh-SORE-us",
    meaningOfName: "spine lizard",
    diet: "carnivorous",
    lengthInMeters: 18,
    period: "Early Cretaceous",
    mya: [112, 97],
    info: "Spinosaurus was one of the largest carnivorous dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail.",
  },
  {
    dinosaurId: "wuL4ddBinQ",
    name: "Tyrannosaurus",
    pronunciation: "tie-RAN-oh-sore-us",
    meaningOfName: "tyrant lizard",
    diet: "carnivorous",
    lengthInMeters: 12,
    period: "Late Cretaceous",
    mya: [68, 66],
    info: "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail.",
  },
  {
    dinosaurId: "qk1bNQA9_n",
    name: "Utahraptor",
    pronunciation: "YOO-tah-RAP-tor",
    meaningOfName: "Utah predator",
    diet: "carnivorous",
    lengthInMeters: 6,
    period: "Early Cretaceous",
    mya: [112, 100],
    info: "Found in the USA, Utahraptor resembled velociraptor but much larger, prompting Robert T. Bakker to pronounce it 'Spielberg's raptor' due to the velociraptors in the movie Jurassic Park being portrayed much larger than their historical counterparts.",
  },
  {
    dinosaurId: "sW_2EWCsDkE",
    name: "Vulcanodon",
    pronunciation: "vul-ka-oh-don",
    meaningOfName: "vulcano tooth",
    diet: "herbivorous",
    lengthInMeters: 6.5,
    period: "Early Jurassic",
    mya: [183, 175],
    info: "Vulcanodon was a primitive sauropod that lived in southern Africa.",
  },
  {
    dinosaurId: "U9vuZmgKwUr",
    name: "Xenoceratops",
    pronunciation: "ZEE-no-SEH-ruh-tops",
    meaningOfName: "alien horned face",
    diet: "herbivorous",
    lengthInMeters: 6,
    period: "Early Cretaceous",
    mya: [78.5, 77.5],
    info: "Xenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes.",
  },
  {
    dinosaurId: "k-fVc9G-5Gm",
    name: "Zephyrosaurus",
    pronunciation: "ZEF-ear-ro-SORE-us",
    meaningOfName: "West wind lizard",
    diet: "herbivorous",
    lengthInMeters: 1.8,
    period: "Early Cretaceous",
    mya: [120, 110],
    info: "An ornithopod dinosaur known only by a partial skull and postcranial fragments, not much about Zephyrosaurus has been discovered.",
  },
];


function getDinosaursAliveMya(dinosaurs, mya, key) {
  let dinosAliveDuringTheseEras = [];
  if (!key || dinosaurs[0][key] === undefined) {
    key = "dinosaurId";
  }
  for (let dino of dinosaurs) {
    console.log(key)
    let myaArray = dino.mya;
    if (myaArray.includes(mya) || myaArray.includes(mya - 1)) {
      dinosAliveDuringTheseEras.push(dino[key]);
    }
  }
  return dinosAliveDuringTheseEras;
}

console.log(getDinosaursAliveMya(dinosaurs, 150) === ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"])
console.log(getDinosaursAliveMya(dinosaurs, 150))

console.log(getDinosaursAliveMya(dinosaurs, 65) === ["WHQcpcOj0G"])
console.log(getDinosaursAliveMya(dinosaurs, 65))

console.log(getDinosaursAliveMya(dinosaurs, 65, "name") === ["WHQcpcOj0G"])
console.log(getDinosaursAliveMya(dinosaurs, 65, "name"))
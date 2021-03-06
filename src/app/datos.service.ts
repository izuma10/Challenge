export class datosservice {
    getDatos(){
       return[
        {
            id: 0,
            image: 'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/16581',
            es: {
              name: 'perro',
              definition:
                'Cánido domesticable capaz de ladrar, generalmente con un buen sentido del oído y del olfato'
            },
            en: {
              name: 'dog',
              definition:
                'Domesticable, carnivorous canid that is able to bark and typically has acute senses of smell and hearing'
            }
        },
        {
            id: 1,
            image: 'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/25818',
            es: {
              name: 'gato',
              definition:
                'Felino domesticable de pequeño tamaño, orejas puntiagudas y cola larga, capaz de maullar'
            },
            en: {
              name: 'cat',
              definition:
                'Domesticable, carnivorous feline of small size with pointed ears and a long tail, capable of meowing'
            }
        },
        {
            id: 2,
            image: 'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/14443',
            es: {
              name: 'vaca',
              definition:
                'Mamífero rumiante domesticable, de gran tamaño, con cuernos lisos y capaz de mugir'
            },
            en: {
              name: 'cow',
              definition: 'Domesticable, ruminant mammal, that is large with smooth horns and able to moo'
            }
        },
        {
            id: 3,
            image: 'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/24749',
            es: {
              name: 'toro',
              definition:
                'Mamífero rumiante domesticable, de gran tamaño, con cuernos lisos y capaz de mugir'
            },
            en: {
              name: 'bull',
              definition: 'Domesticable, ruminant mammal, that is large with smooth horns and able to moo'
            }
        },
        {
            id: 4,
            image: 'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/16077',
            es: {
              name: 'caballo',
              definition:
                'Mamífero herbívoro equino, de gran tamaño, crines y cola de largas cerdas y empleado como montura o animal de carga'
            },
            en: {
              name: 'horse',
              definition:
                'Large, herbivorous mammal that has a long mane and tail and is used for riding or as a pack animal'
            }
        },
        {
            id: 5,
            image: 'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/13450',
            es: {
              name: 'cerdo',
              definition:
                'Mamífero de granja omnívoro de cuerpo pesado, generalmente rosa y corta cola curva, criado principalmente por su carne'
            },
            en: {
              name: 'pig',
              definition:
                'Omnivorous farm mammal that has a heavy body with a generally pink color and a short, curved tail, raised mainly for its meat'
            }
        }
        
       ]; 
    }
}
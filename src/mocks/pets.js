import dunga from '../assets/Dunga.png';
import felicia from '../assets/Felicia.png';
import sirius from '../assets/Sirius.png';
import fiona from '../assets/Fiona.png';

import dunga1 from '../assets/Dunga1.png';
import dunga2 from '../assets/Dunga2.png';

import felicia1 from '../assets/Felicia1.png';
import felicia2 from '../assets/Felicia2.png';

import sirius1 from '../assets/Sirius1.png';
import sirius2 from '../assets/Sirius2.png';

import fiona1 from '../assets/Fiona1.png';
import fiona2 from '../assets/Fiona2.png';

const pets = [
    {
        name: 'Dunga',
        age: '2 anos',
        size: 'Porte pequeno',
        image: dunga,
        characteristics: 'Calmo e educado',
        locality: 'Rio de Janeiro (RJ)',
        description: {
            informations: ['Se dá bem com outros animais', 'Se dá bem com crianças mais velhas mas se assusta com bebes', 'Gosta de brincar e passear'],
            summary: 'Dunga é encantador, conquista a todos com sua serenidade. Tem pelo macio e olhos expressivos que revelam a doçura de sua personalidade. Adora passar o tempo relaxando ao lado de seus humanos ou em um cantinho ensolarado. Este companheiro leal e afetuoso vai trazer uma atmosfera alegre para qualquer lar que tenha a sorte de tê-lo como parte da família!',
            photos: [dunga1, dunga2],
        }
    },
    {
        name: 'Felicia',
        age: '3 meses',
        size: 'Porte pequeno',
        image: felicia,
        characteristics: 'Ativa e carinhosa',
        locality: 'Nova Iguaçu (RJ)',
        description: {
            informations: ['Se dá bem com outros gatos', 'Gosta de dormir e brincar'],
            summary: 'Felicia é uma gatinha muito carinhosa e brincalhona. Ela adora brincar com bolinhas e com os outros gatos. Ela é muito esperta e aprende rápido. Ela é muito curiosa e adora explorar a casa. Ela é muito carinhosa e adora dormir no colo. Ela é muito companheira e vai fazer muita companhia para a família que adotá-la.',
            photos: [felicia1, felicia2],
        }
    },
    {
        name: 'Sirius',
        age: '6 meses',
        size: 'Porte grande',
        image: sirius,
        characteristics: 'Ativo e educado',
        locality: 'Duque de Caxias (RJ)',
        description: {
            informations: ['Se dá bem com outros gatos', 'Gosta de dormir e brincar'],
            summary: 'Sirius é um cachorro muito carinhoso e brincalhão. Ele é muito companheiro e vai fazer muita companhia para a família que adotá-la.',
            photos: [sirius1, sirius2],
        }
    },
    {
        name: 'Fiona',
        age: '3 anos',
        size: 'Porte pequeno',
        image: fiona,
        characteristics: 'Calma e carinhosa',
        locality: 'São Gonçalo (RJ)',
        description: {
            informations: ['Se dá bem com outros gatos', 'Gosta de dormir e brincar'],
            summary: 'Fiona é uma cachorra muito carinhosa e brincalhona. Ela é muito companheira e vai fazer muita companhia para a família que adotá-la.',
            photos: [fiona1, fiona2],
        }
    }
];

export default pets;
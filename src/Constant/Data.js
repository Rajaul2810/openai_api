import { FiBook, FiCpu, FiFramer, FiHelpCircle, FiLayers, FiSettings } from "react-icons/fi";
export const openData = [
    {
        id: 1,
        name: 'Question & Answer',
        description: 'Answer questions based on existing knowledge.',
        icon: <FiHelpCircle size={30} />,
        color: '#e81cff',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        id: 2,
        name: 'Grammar correction',
        description: 'Corrects sentences into standard English.',
        icon: <FiBook size={30} />,
        color: '#696eff',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        id: 3,
        name: 'Summarize for a 2nd grader',
        description: 'Translates difficult text into simpler concepts.',
        icon: <FiCpu size={30} />,
        color: '#ff1b6b',
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        id: 4,
        name: 'English to other languages',
        description: 'Translates English text into French, Spanish and Japanese.',
        icon: <FiSettings size={30} />,
        color: '#bf0fff',
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        id: 5,
        name: 'JavaScript to Python',
        description: 'Convert simple JavaScript expressions into Python.',
        icon: <FiLayers size={30} />,
        color: '#ef709b',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        id: 6,
        name: 'Create study notes',
        description: 'Provide a topic and get study notes.',
        icon: <FiFramer size={30} />,
        color: '#432371',
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    }

]
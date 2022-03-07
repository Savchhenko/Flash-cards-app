const API_KEY = "dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30";

//второй принимаемый параметр опциональный, задали значение по умолчанию
const getTranslateWord = async (text, lang = "en-ru") => { 
    const res = await fetch(`https://reactmarathon-api.netlify.app/api/translate?text=${text}&lang=${lang}`, {
        headers: {
            "Authorization": API_KEY,
        }
    });
    const body = await res.json();

    return body;
};

export default getTranslateWord;

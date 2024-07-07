
const TranslateLanuage=async(checker)=>{
    const url =`https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&profanityAction=NoAction&textType=plain`;
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'Your_API_KEY',
		'x-rapidapi-host': 'YOUR_DOMAIN',
		'Content-Type': 'application/json'
	},
	body: [
		{
			Text: checker.output,
                        From:checker.inputLanguage,
                        To:checker.outputLanguage,
		}
	]
};
try {
	const response = await fetch(url, options);
	const result = await response.text();
	return result
} catch (error) {
	console.error(error);
}
}
export default TranslateLanuage

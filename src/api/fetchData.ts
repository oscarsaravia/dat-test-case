const { VITE_DAT_TEST_CASE_URL } = import.meta.env

export const fetchData = async () => {
    try {
        const response = await fetch(VITE_DAT_TEST_CASE_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data: ", error);
    }  
}

export const postData = async (data: string[]) => {
    try {
        const response = await fetch(VITE_DAT_TEST_CASE_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting data: ', error);
        throw error;
    }
}
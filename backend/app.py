from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    api_url = "https://globalip.melissadata.net/v4/web/iplocation/doiplocation"
    # client_ip = request.remote_addr
    # print(f"Client IP Address: {client_ip}")
    params = {
    'id': 'B-Z5bbxUSZP7qj4Twt8Mdt**nSAcwXpxhQ0PC2lXxuDAZ-**',
    'ip': "169.234.42.233",
    }
    
    try:
        # Make a GET request to the API
        response = requests.get(api_url, params=params)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response from the API
            api_data = response.json()

            # Return the API data as JSON
            location = api_data['Records'][0]['City']
            return location
        else:
            # If the request was not successful, return an error message
            return jsonify({'error': 'Failed to fetch data from the API'}), response.status_code

    except Exception as e:
        # Handle any exceptions that might occur during the API request
        return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)
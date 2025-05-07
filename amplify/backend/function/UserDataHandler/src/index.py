import json
import boto3
from botocore.exceptions import ClientError

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('UserData')

def lambda_handler(event, context):
    print("Event received:", json.dumps(event))  # 🔍 log input event
    try:
        if event['httpMethod'] == 'POST':
            return create_item(event)
        elif event['httpMethod'] == 'GET':
            return get_item(event)
        else:
            return {
                'statusCode': 400,
                'body': json.dumps('Unsupported HTTP method')
            }
    except Exception as e:
        print("Unhandled error:", str(e))
        return {
            'statusCode': 500,
            'body': json.dumps('Internal server error')
        }


def create_item(event):
    # Extract data from the event body (assuming it's passed as JSON)
    data = json.loads(event['body'])
    try:
        response = table.put_item(
            Item={
                'id': data['id'],  # Assuming the item has an 'id' field
                'name': data['name'],  # Assuming 'name' is another field
                'email': data['email']  # Additional fields as needed
            }
        )
        return {
            'statusCode': 200,
            'body': json.dumps('Item successfully created')
        }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error creating item: {str(e)}')
        }

def get_item(event):
    # Get the 'id' from the query string
    item_id = event['queryStringParameters']['id']  # Assumes 'id' is passed as a query parameter
    try:
        response = table.get_item(
            Key={
                'id': item_id
            }
        )
        if 'Item' in response:
            return {
                'statusCode': 200,
                'body': json.dumps(response['Item'])
            }
        else:
            return {
                'statusCode': 404,
                'body': json.dumps('Item not found')
            }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error retrieving item: {str(e)}')
        }

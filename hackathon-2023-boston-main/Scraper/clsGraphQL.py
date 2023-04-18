import requests

class GraphQL:
    def __init__(self,url_In):
        self.url = url_In

    def Post(self, body): 
        try:
            print(self.url)
            response = requests.post(url=self.url, json={"query": body})
        except Exception as ex:
            print(ex)

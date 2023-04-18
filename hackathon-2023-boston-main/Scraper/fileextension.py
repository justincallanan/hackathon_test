import pandas as pd

df = pd.read_csv("C:\\Users\I32800\\Downloads\\hackathon-2023-boston-main\\hackathon-2023-boston-main\\Scraper\\FileTypeLookup.csv",
                 names = ["Extension", "Language"])

def getFileType(filename):
    fileextension = filename[-(len(filename)-filename.find(".")-1):]
    filetype = df.loc[df.Extension == fileextension, "Language"]
    return filetype

filename = "test.cs"

result = getFileType(filename)
print(result)
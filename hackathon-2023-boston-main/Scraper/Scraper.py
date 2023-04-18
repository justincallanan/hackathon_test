import sys
import clsGraphQL as hg
import clsScraperData as sd

def GetUserList(config):
    return config.source

def SaveData(config,data):
    print("saving data")
    s = hg.GraphQL(config.saveUrl)
    result = s.Post(data)
    return  result 

def GetData(config, options):
    print("getting data")
    match config.type:
        case 0:
            return GetDataFile(config,options)
        case 1:
            return GetDataGraphQL(options)
    return 

def GetDataFile(config,data):
    f = open(config.source,'r')
    contents = f.readlines()
    return contents

def GetDataGraphQL(config,data):
    s = hg.GraphQL(config.source)
    result = s.Post(config.saveUrl)
    return result

def ProcessData(config,inputBody):
    print("processing data")
    outputBody = inputBody
    return outputBody

def TransformData(config,inputBody):
    print("transforming data")
    if len(config.transform) == 0:
        print("no transform needed")
        return inputBody
    outputBody = inputBody
    return outputBody

config = sd.ScraperData()
config.source = "C:\\Users\\I32800\\Downloads\\hackathon-2023-boston-main\\hackathon-2023-boston-main\\web-client\\src\\data\\mockSkillData.json"

result = GetUserList(config)
result = GetData(config,result)
result = ProcessData(config,result)
result = TransformData(config,result)
result = SaveData(config,result)


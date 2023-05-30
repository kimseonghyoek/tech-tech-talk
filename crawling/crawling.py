# 네이버 IT일반 뉴스 크롤링
from urllib.request import urlopen
from bs4 import BeautifulSoup
from collections import OrderedDict
import requests
import json
from pathlib import Path
import os

html = urlopen("https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105")
bs_object  = BeautifulSoup(html, "html.parser")
dir_news_link = Path("./link.json")
dir_title = Path("./HeadLine.json")


news_link = []
title_list = []

def WriteLink():
    with open('./link.json', 'a+', encoding='UTF-8') as make_file:
        for i in range(1, 7):
            news_link.append(bs_object.select('#main_content > div > div._persist > div.section_headline > ul > li:nth-child('+str(i)+') > div.sh_text > a')[0].attrs['href'])
        json.dump(news_link, make_file, ensure_ascii=False)

if dir_news_link.exists() :
    os.remove('./link.json')
    WriteLink()
else :
    WriteLink()

def WriteHeadLine():
    with open('./Headline.json', 'a+', encoding='UTF-8') as make_file:
        for link in news_link:
            header = {"user-agent": "Mozilla/5.0"}

            html = requests.get(link, headers=header)
            soup = BeautifulSoup(html.text, 'html.parser')    

            title = soup.find('h2', {'id': 'title_area'}).text
            title_list.append(title)
        json.dump(title_list, make_file, ensure_ascii=False)

if dir_title.exists() :
    os.remove('./Headline.json')
    WriteHeadLine()
else :
    WriteHeadLine()
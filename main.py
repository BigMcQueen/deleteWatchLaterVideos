# Selenium
from selenium import webdriver
import chromedriver_binary
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.keys import Keys
import time

# ブラウザインスタンス
browser = webdriver.Chrome()

# リンクを開く
browser.get("https://www.google.co.jp/")

time.sleep(5)

browser.quit()
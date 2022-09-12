from re import A
from flask import Flask

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

app = Flask(__name__)

@app.route("/getarticle")
def get_article():


    options = Options()
    options.add_experimental_option("detach", True)
    driver = webdriver.Chrome(executable_path='/usr/bin/chromedriver', options=options)
    driver.get("https://meduza.io")

    WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "a.Link-root.Link-isInBlockTitle"))).click()
    a=a
    
    return "done"

if __name__ == "__main__":
    app.run(debug=True)

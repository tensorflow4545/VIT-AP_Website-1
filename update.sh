git pull
cd vitap-webapp-frontend
npm install
npm run build
ln -s ~/VIT-AP_Website-1/vitap-webapp-frontend/out ~/Vitiebot/static
cd ..
sudo service apache2 restart


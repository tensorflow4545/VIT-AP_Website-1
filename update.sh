git pull
cd vitap-webapp-frontend
npm install
npm run build
ln -s out ~/Vitiebot/static
cd ..
sudo service apache2 restart


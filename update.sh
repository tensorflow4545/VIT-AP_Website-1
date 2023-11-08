git pull
cd vitap-webapp-frontend
npm install
npm run build
ln -S out ~/Vitiebot/static
cd ..
sudo service apache2 restart


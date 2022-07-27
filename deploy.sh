foreach SERVICE ( auth products orders )
cd $SERVICE
docker build -t arjanaswal/node-kubernetes-$SERVICE-service .
docker push arjanaswal/node-kubernetes-$SERVICE-service
cd ..
end

kubectl delete -f kubernetes
kubectl apply -f kubernetes
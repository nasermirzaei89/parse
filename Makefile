docker-swarm-init:
	docker swarm init --advertise-addr eth0

openfaas:
	git clone https://github.com/openfaas/faas
	cd faas
	./deploy_stack.sh

install-cli:
	curl -sSL https://cli.openfaas.com | sudo -E sh
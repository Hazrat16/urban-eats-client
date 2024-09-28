import subprocess
import sys

# Docker wrapper functions
def docker_logs(service_name):
    subprocess.run(['docker', 'logs', '-f', service_name])

def docker_run(service, port_mapping):
    subprocess.run(['docker', 'run', '-p', port_mapping, service])

def docker_clean(option):
    if option == '-image':
        subprocess.run(['docker', 'image', 'prune', '-f'])
    elif option == '-everything':
        subprocess.run(['docker', 'system', 'prune', '-f'])

if __name__ == "__main__":
    command = sys.argv[1]

    if command == 'logs':
        docker_logs(sys.argv[2])
    elif command == 'run':
        docker_run(sys.argv[2], sys.argv[3])
    elif command == 'clean':
        docker_clean(sys.argv[2])

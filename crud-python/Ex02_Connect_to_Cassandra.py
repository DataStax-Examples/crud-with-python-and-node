#!/usr/bin/env python3
from db_connection import Connection

print('========================================')
print('Start exercise')
try:
	connection = Connection()
	output = connection.session.execute("SELECT * FROM system.local")
	for row in output:
	    print("Your are now connected to cluster '{}'".format(row.cluster_name))
except Exception as e:
    print(e)
    print('Failure')
else:
    print('Success')
finally:
	print('Closing connection (up to 10s)')
	connection.close()
print('========================================')

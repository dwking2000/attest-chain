const program = require('commander');

const { sign_attestation, verify_attestation, revoke_attestation, claim_compromised } = require('./client.js');


program 
	.version('0.0.1')
	.description('attest-client');

program
	.command('sign_attestation <data> <private_key>')
	.alias('s')
	.description('Sign attestation with private key')
	.action((data, private_key) => {
		sign_attestation({data, private_key});
	});

program 
	.command('verify_attestation <attestation_data> <attestation_sig> <attestor_pubkey>')
	.alias('v')
	.description('Verifies that a signed attestation is valid.')
	.action((attestation_data, attestation_sig, attestor_pubkey) => {
		verify_attestation({attestation_data, attestation_sig, attestor_pubkey});
	});

program 
	.command('revoke_attestation <signed_attestation> <private_key>')
	.alias('r')
	.description('Revoke attestation')
	.action((signed_attestation, private_key) => {
		revoke_attestation({signed_attestation, private_key});
	});

program
	.command('claim_compromised <comp_priv_key> <new_priv_key>')
	.alias('c')
	.description('Claim that a private key has been compromised and replace it with a new private key')
	.action((comp_priv_key, new_priv_key) => {
		claim_compromised({comp_priv_key, new_priv_key});
	});

program.parse(process.argv);

// source: protos/messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protowire.AcceptedBlock', null, global);
goog.exportSymbol('proto.protowire.AddPeerRequestMessage', null, global);
goog.exportSymbol('proto.protowire.AddPeerResponseMessage', null, global);
goog.exportSymbol('proto.protowire.AddressesMessage', null, global);
goog.exportSymbol('proto.protowire.BlockAddedNotificationMessage', null, global);
goog.exportSymbol('proto.protowire.BlockHeader', null, global);
goog.exportSymbol('proto.protowire.BlockLocatorMessage', null, global);
goog.exportSymbol('proto.protowire.BlockMessage', null, global);
goog.exportSymbol('proto.protowire.BlockVerboseData', null, global);
goog.exportSymbol('proto.protowire.ChainBlock', null, global);
goog.exportSymbol('proto.protowire.ChainChangedNotificationMessage', null, global);
goog.exportSymbol('proto.protowire.DoneIBDBlocksMessage', null, global);
goog.exportSymbol('proto.protowire.FinalityConflictNotificationMessage', null, global);
goog.exportSymbol('proto.protowire.FinalityConflictResolvedNotificationMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockCountRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockCountResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockDagInfoRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockDagInfoResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockTemplateRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockTemplateResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlockTemplateTransactionMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlocksRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetBlocksResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetChainFromBlockRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetChainFromBlockResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetConnectedPeerInfoMessage', null, global);
goog.exportSymbol('proto.protowire.GetConnectedPeerInfoRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetConnectedPeerInfoResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetCurrentNetworkRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetCurrentNetworkResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetHeadersRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetHeadersResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetMempoolEntriesRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetMempoolEntriesResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetMempoolEntryRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetMempoolEntryResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetPeerAddressesKnownAddressMessage', null, global);
goog.exportSymbol('proto.protowire.GetPeerAddressesRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetPeerAddressesResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetSelectedTipHashRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetSelectedTipHashResponseMessage', null, global);
goog.exportSymbol('proto.protowire.GetSubnetworkRequestMessage', null, global);
goog.exportSymbol('proto.protowire.GetSubnetworkResponseMessage', null, global);
goog.exportSymbol('proto.protowire.Hash', null, global);
goog.exportSymbol('proto.protowire.InvRelayBlockMessage', null, global);
goog.exportSymbol('proto.protowire.InvTransactionsMessage', null, global);
goog.exportSymbol('proto.protowire.KaspadMessage', null, global);
goog.exportSymbol('proto.protowire.KaspadMessage.PayloadCase', null, global);
goog.exportSymbol('proto.protowire.MempoolEntry', null, global);
goog.exportSymbol('proto.protowire.NetAddress', null, global);
goog.exportSymbol('proto.protowire.NotifyBlockAddedRequestMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyBlockAddedResponseMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyChainChangedRequestMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyChainChangedResponseMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyFinalityConflictsRequestMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyFinalityConflictsResponseMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyTransactionAddedRequestMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyTransactionAddedResponseMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyUTXOOfAddressChangedRequestMessage', null, global);
goog.exportSymbol('proto.protowire.NotifyUTXOOfAddressChangedResponseMessage', null, global);
goog.exportSymbol('proto.protowire.Outpoint', null, global);
goog.exportSymbol('proto.protowire.PingMessage', null, global);
goog.exportSymbol('proto.protowire.PongMessage', null, global);
goog.exportSymbol('proto.protowire.RPCError', null, global);
goog.exportSymbol('proto.protowire.RejectMessage', null, global);
goog.exportSymbol('proto.protowire.RequestAddressesMessage', null, global);
goog.exportSymbol('proto.protowire.RequestBlockLocatorMessage', null, global);
goog.exportSymbol('proto.protowire.RequestIBDBlocksMessage', null, global);
goog.exportSymbol('proto.protowire.RequestNextIBDBlocksMessage', null, global);
goog.exportSymbol('proto.protowire.RequestRelayBlocksMessage', null, global);
goog.exportSymbol('proto.protowire.RequestSelectedTipMessage', null, global);
goog.exportSymbol('proto.protowire.RequestTransactionsMessage', null, global);
goog.exportSymbol('proto.protowire.ResolveFinalityConflictRequestMessage', null, global);
goog.exportSymbol('proto.protowire.ResolveFinalityConflictResponseMessage', null, global);
goog.exportSymbol('proto.protowire.ScriptPubKeyResult', null, global);
goog.exportSymbol('proto.protowire.ScriptSig', null, global);
goog.exportSymbol('proto.protowire.SelectedTipMessage', null, global);
goog.exportSymbol('proto.protowire.ShutDownRequestMessage', null, global);
goog.exportSymbol('proto.protowire.ShutDownResponseMessage', null, global);
goog.exportSymbol('proto.protowire.SubmitBlockRequestMessage', null, global);
goog.exportSymbol('proto.protowire.SubmitBlockResponseMessage', null, global);
goog.exportSymbol('proto.protowire.SubmitTransactionRequestMessage', null, global);
goog.exportSymbol('proto.protowire.SubmitTransactionResponseMessage', null, global);
goog.exportSymbol('proto.protowire.SubnetworkID', null, global);
goog.exportSymbol('proto.protowire.TransactionAddedNotificationMessage', null, global);
goog.exportSymbol('proto.protowire.TransactionID', null, global);
goog.exportSymbol('proto.protowire.TransactionInput', null, global);
goog.exportSymbol('proto.protowire.TransactionMessage', null, global);
goog.exportSymbol('proto.protowire.TransactionNotFoundMessage', null, global);
goog.exportSymbol('proto.protowire.TransactionOutput', null, global);
goog.exportSymbol('proto.protowire.TransactionVerboseData', null, global);
goog.exportSymbol('proto.protowire.TransactionVerboseInput', null, global);
goog.exportSymbol('proto.protowire.TransactionVerboseOutput', null, global);
goog.exportSymbol('proto.protowire.UTXOOfAddressChangedNotificationMessage', null, global);
goog.exportSymbol('proto.protowire.VerackMessage', null, global);
goog.exportSymbol('proto.protowire.VersionMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.KaspadMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.protowire.KaspadMessage.oneofGroups_);
};
goog.inherits(proto.protowire.KaspadMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.KaspadMessage.displayName = 'proto.protowire.KaspadMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.AddressesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.AddressesMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.AddressesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.AddressesMessage.displayName = 'proto.protowire.AddressesMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NetAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.NetAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NetAddress.displayName = 'proto.protowire.NetAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.SubnetworkID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.SubnetworkID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.SubnetworkID.displayName = 'proto.protowire.SubnetworkID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RequestAddressesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.RequestAddressesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RequestAddressesMessage.displayName = 'proto.protowire.RequestAddressesMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.TransactionMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.TransactionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionMessage.displayName = 'proto.protowire.TransactionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.TransactionInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionInput.displayName = 'proto.protowire.TransactionInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.Outpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.Outpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.Outpoint.displayName = 'proto.protowire.Outpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.TransactionID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionID.displayName = 'proto.protowire.TransactionID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.TransactionOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionOutput.displayName = 'proto.protowire.TransactionOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.BlockMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.BlockMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.BlockMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.BlockMessage.displayName = 'proto.protowire.BlockMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.BlockHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.BlockHeader.repeatedFields_, null);
};
goog.inherits(proto.protowire.BlockHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.BlockHeader.displayName = 'proto.protowire.BlockHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.Hash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.Hash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.Hash.displayName = 'proto.protowire.Hash';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RequestBlockLocatorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.RequestBlockLocatorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RequestBlockLocatorMessage.displayName = 'proto.protowire.RequestBlockLocatorMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.BlockLocatorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.BlockLocatorMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.BlockLocatorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.BlockLocatorMessage.displayName = 'proto.protowire.BlockLocatorMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RequestIBDBlocksMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.RequestIBDBlocksMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RequestIBDBlocksMessage.displayName = 'proto.protowire.RequestIBDBlocksMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RequestNextIBDBlocksMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.RequestNextIBDBlocksMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RequestNextIBDBlocksMessage.displayName = 'proto.protowire.RequestNextIBDBlocksMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.DoneIBDBlocksMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.DoneIBDBlocksMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.DoneIBDBlocksMessage.displayName = 'proto.protowire.DoneIBDBlocksMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RequestRelayBlocksMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.RequestRelayBlocksMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.RequestRelayBlocksMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RequestRelayBlocksMessage.displayName = 'proto.protowire.RequestRelayBlocksMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RequestSelectedTipMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.RequestSelectedTipMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RequestSelectedTipMessage.displayName = 'proto.protowire.RequestSelectedTipMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RequestTransactionsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.RequestTransactionsMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.RequestTransactionsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RequestTransactionsMessage.displayName = 'proto.protowire.RequestTransactionsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionNotFoundMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.TransactionNotFoundMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionNotFoundMessage.displayName = 'proto.protowire.TransactionNotFoundMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.InvRelayBlockMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.InvRelayBlockMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.InvRelayBlockMessage.displayName = 'proto.protowire.InvRelayBlockMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.InvTransactionsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.InvTransactionsMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.InvTransactionsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.InvTransactionsMessage.displayName = 'proto.protowire.InvTransactionsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.PingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.PingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.PingMessage.displayName = 'proto.protowire.PingMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.PongMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.PongMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.PongMessage.displayName = 'proto.protowire.PongMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.SelectedTipMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.SelectedTipMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.SelectedTipMessage.displayName = 'proto.protowire.SelectedTipMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.VerackMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.VerackMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.VerackMessage.displayName = 'proto.protowire.VerackMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.VersionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.VersionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.VersionMessage.displayName = 'proto.protowire.VersionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RejectMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.RejectMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RejectMessage.displayName = 'proto.protowire.RejectMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.RPCError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.RPCError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.RPCError.displayName = 'proto.protowire.RPCError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetCurrentNetworkRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetCurrentNetworkRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetCurrentNetworkRequestMessage.displayName = 'proto.protowire.GetCurrentNetworkRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetCurrentNetworkResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.GetCurrentNetworkResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetCurrentNetworkResponseMessage.displayName = 'proto.protowire.GetCurrentNetworkResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.SubmitBlockRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.SubmitBlockRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.SubmitBlockRequestMessage.displayName = 'proto.protowire.SubmitBlockRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.SubmitBlockResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.SubmitBlockResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.SubmitBlockResponseMessage.displayName = 'proto.protowire.SubmitBlockResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockTemplateRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetBlockTemplateRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockTemplateRequestMessage.displayName = 'proto.protowire.GetBlockTemplateRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockTemplateResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetBlockTemplateResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetBlockTemplateResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockTemplateResponseMessage.displayName = 'proto.protowire.GetBlockTemplateResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockTemplateTransactionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.GetBlockTemplateTransactionMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetBlockTemplateTransactionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockTemplateTransactionMessage.displayName = 'proto.protowire.GetBlockTemplateTransactionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyBlockAddedRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.NotifyBlockAddedRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyBlockAddedRequestMessage.displayName = 'proto.protowire.NotifyBlockAddedRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyBlockAddedResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.NotifyBlockAddedResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyBlockAddedResponseMessage.displayName = 'proto.protowire.NotifyBlockAddedResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.BlockAddedNotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.BlockAddedNotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.BlockAddedNotificationMessage.displayName = 'proto.protowire.BlockAddedNotificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetPeerAddressesRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetPeerAddressesRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetPeerAddressesRequestMessage.displayName = 'proto.protowire.GetPeerAddressesRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetPeerAddressesResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetPeerAddressesResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetPeerAddressesResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetPeerAddressesResponseMessage.displayName = 'proto.protowire.GetPeerAddressesResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetPeerAddressesKnownAddressMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetPeerAddressesKnownAddressMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetPeerAddressesKnownAddressMessage.displayName = 'proto.protowire.GetPeerAddressesKnownAddressMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetSelectedTipHashRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetSelectedTipHashRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetSelectedTipHashRequestMessage.displayName = 'proto.protowire.GetSelectedTipHashRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetSelectedTipHashResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.GetSelectedTipHashResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetSelectedTipHashResponseMessage.displayName = 'proto.protowire.GetSelectedTipHashResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.MempoolEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.MempoolEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.MempoolEntry.displayName = 'proto.protowire.MempoolEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetMempoolEntryRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetMempoolEntryRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetMempoolEntryRequestMessage.displayName = 'proto.protowire.GetMempoolEntryRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetMempoolEntryResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.GetMempoolEntryResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetMempoolEntryResponseMessage.displayName = 'proto.protowire.GetMempoolEntryResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetMempoolEntriesRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetMempoolEntriesRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetMempoolEntriesRequestMessage.displayName = 'proto.protowire.GetMempoolEntriesRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetMempoolEntriesResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetMempoolEntriesResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetMempoolEntriesResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetMempoolEntriesResponseMessage.displayName = 'proto.protowire.GetMempoolEntriesResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetConnectedPeerInfoRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetConnectedPeerInfoRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetConnectedPeerInfoRequestMessage.displayName = 'proto.protowire.GetConnectedPeerInfoRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetConnectedPeerInfoResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetConnectedPeerInfoResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetConnectedPeerInfoResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetConnectedPeerInfoResponseMessage.displayName = 'proto.protowire.GetConnectedPeerInfoResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetConnectedPeerInfoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetConnectedPeerInfoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetConnectedPeerInfoMessage.displayName = 'proto.protowire.GetConnectedPeerInfoMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.AddPeerRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.AddPeerRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.AddPeerRequestMessage.displayName = 'proto.protowire.AddPeerRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.AddPeerResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.AddPeerResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.AddPeerResponseMessage.displayName = 'proto.protowire.AddPeerResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.SubmitTransactionRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.SubmitTransactionRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.SubmitTransactionRequestMessage.displayName = 'proto.protowire.SubmitTransactionRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.SubmitTransactionResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.SubmitTransactionResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.SubmitTransactionResponseMessage.displayName = 'proto.protowire.SubmitTransactionResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyChainChangedRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.NotifyChainChangedRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyChainChangedRequestMessage.displayName = 'proto.protowire.NotifyChainChangedRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyChainChangedResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.NotifyChainChangedResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyChainChangedResponseMessage.displayName = 'proto.protowire.NotifyChainChangedResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ChainChangedNotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.ChainChangedNotificationMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.ChainChangedNotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ChainChangedNotificationMessage.displayName = 'proto.protowire.ChainChangedNotificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ChainBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.ChainBlock.repeatedFields_, null);
};
goog.inherits(proto.protowire.ChainBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ChainBlock.displayName = 'proto.protowire.ChainBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.AcceptedBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.AcceptedBlock.repeatedFields_, null);
};
goog.inherits(proto.protowire.AcceptedBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.AcceptedBlock.displayName = 'proto.protowire.AcceptedBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetBlockRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockRequestMessage.displayName = 'proto.protowire.GetBlockRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.GetBlockResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockResponseMessage.displayName = 'proto.protowire.GetBlockResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.BlockVerboseData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.BlockVerboseData.repeatedFields_, null);
};
goog.inherits(proto.protowire.BlockVerboseData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.BlockVerboseData.displayName = 'proto.protowire.BlockVerboseData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionVerboseData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.TransactionVerboseData.repeatedFields_, null);
};
goog.inherits(proto.protowire.TransactionVerboseData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionVerboseData.displayName = 'proto.protowire.TransactionVerboseData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionVerboseInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.TransactionVerboseInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionVerboseInput.displayName = 'proto.protowire.TransactionVerboseInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ScriptSig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.ScriptSig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ScriptSig.displayName = 'proto.protowire.ScriptSig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionVerboseOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.TransactionVerboseOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionVerboseOutput.displayName = 'proto.protowire.TransactionVerboseOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ScriptPubKeyResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.ScriptPubKeyResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ScriptPubKeyResult.displayName = 'proto.protowire.ScriptPubKeyResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetSubnetworkRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetSubnetworkRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetSubnetworkRequestMessage.displayName = 'proto.protowire.GetSubnetworkRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetSubnetworkResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.GetSubnetworkResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetSubnetworkResponseMessage.displayName = 'proto.protowire.GetSubnetworkResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetChainFromBlockRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetChainFromBlockRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetChainFromBlockRequestMessage.displayName = 'proto.protowire.GetChainFromBlockRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetChainFromBlockResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetChainFromBlockResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetChainFromBlockResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetChainFromBlockResponseMessage.displayName = 'proto.protowire.GetChainFromBlockResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlocksRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetBlocksRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlocksRequestMessage.displayName = 'proto.protowire.GetBlocksRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlocksResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetBlocksResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetBlocksResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlocksResponseMessage.displayName = 'proto.protowire.GetBlocksResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockCountRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetBlockCountRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockCountRequestMessage.displayName = 'proto.protowire.GetBlockCountRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockCountResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.GetBlockCountResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockCountResponseMessage.displayName = 'proto.protowire.GetBlockCountResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockDagInfoRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetBlockDagInfoRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockDagInfoRequestMessage.displayName = 'proto.protowire.GetBlockDagInfoRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetBlockDagInfoResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetBlockDagInfoResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetBlockDagInfoResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetBlockDagInfoResponseMessage.displayName = 'proto.protowire.GetBlockDagInfoResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ResolveFinalityConflictRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.ResolveFinalityConflictRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ResolveFinalityConflictRequestMessage.displayName = 'proto.protowire.ResolveFinalityConflictRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ResolveFinalityConflictResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.ResolveFinalityConflictResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ResolveFinalityConflictResponseMessage.displayName = 'proto.protowire.ResolveFinalityConflictResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyFinalityConflictsRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.NotifyFinalityConflictsRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyFinalityConflictsRequestMessage.displayName = 'proto.protowire.NotifyFinalityConflictsRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyFinalityConflictsResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.NotifyFinalityConflictsResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyFinalityConflictsResponseMessage.displayName = 'proto.protowire.NotifyFinalityConflictsResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.FinalityConflictNotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.FinalityConflictNotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.FinalityConflictNotificationMessage.displayName = 'proto.protowire.FinalityConflictNotificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.FinalityConflictResolvedNotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.FinalityConflictResolvedNotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.FinalityConflictResolvedNotificationMessage.displayName = 'proto.protowire.FinalityConflictResolvedNotificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ShutDownRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.ShutDownRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ShutDownRequestMessage.displayName = 'proto.protowire.ShutDownRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.ShutDownResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.ShutDownResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.ShutDownResponseMessage.displayName = 'proto.protowire.ShutDownResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetHeadersRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.GetHeadersRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetHeadersRequestMessage.displayName = 'proto.protowire.GetHeadersRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.GetHeadersResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protowire.GetHeadersResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.GetHeadersResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.GetHeadersResponseMessage.displayName = 'proto.protowire.GetHeadersResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyTransactionAddedRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.NotifyTransactionAddedRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyTransactionAddedRequestMessage.displayName = 'proto.protowire.NotifyTransactionAddedRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyTransactionAddedResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.NotifyTransactionAddedResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyTransactionAddedResponseMessage.displayName = 'proto.protowire.NotifyTransactionAddedResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.TransactionAddedNotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protowire.TransactionAddedNotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.TransactionAddedNotificationMessage.displayName = 'proto.protowire.TransactionAddedNotificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.NotifyUTXOOfAddressChangedRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.displayName = 'proto.protowire.NotifyUTXOOfAddressChangedRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protowire.NotifyUTXOOfAddressChangedResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.displayName = 'proto.protowire.NotifyUTXOOfAddressChangedResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protowire.UTXOOfAddressChangedNotificationMessage.repeatedFields_, null);
};
goog.inherits(proto.protowire.UTXOOfAddressChangedNotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protowire.UTXOOfAddressChangedNotificationMessage.displayName = 'proto.protowire.UTXOOfAddressChangedNotificationMessage';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protowire.KaspadMessage.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054]];

/**
 * @enum {number}
 */
proto.protowire.KaspadMessage.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  ADDRESSES: 1,
  BLOCK: 2,
  TRANSACTION: 3,
  REQUESTBLOCKLOCATOR: 4,
  BLOCKLOCATOR: 5,
  REQUESTADDRESSES: 6,
  REQUESTIBDBLOCKS: 7,
  REQUESTNEXTIBDBLOCKS: 8,
  DONEIBDBLOCKS: 9,
  REQUESTRELAYBLOCKS: 10,
  REQUESTSELECTEDTIP: 11,
  REQUESTTRANSACTIONS: 12,
  IBDBLOCK: 13,
  INVRELAYBLOCK: 14,
  INVTRANSACTIONS: 15,
  PING: 16,
  PONG: 17,
  SELECTEDTIP: 18,
  VERACK: 19,
  VERSION: 20,
  TRANSACTIONNOTFOUND: 21,
  REJECT: 22,
  GETCURRENTNETWORKREQUEST: 1001,
  GETCURRENTNETWORKRESPONSE: 1002,
  SUBMITBLOCKREQUEST: 1003,
  SUBMITBLOCKRESPONSE: 1004,
  GETBLOCKTEMPLATEREQUEST: 1005,
  GETBLOCKTEMPLATERESPONSE: 1006,
  NOTIFYBLOCKADDEDREQUEST: 1007,
  NOTIFYBLOCKADDEDRESPONSE: 1008,
  BLOCKADDEDNOTIFICATION: 1009,
  GETPEERADDRESSESREQUEST: 1010,
  GETPEERADDRESSESRESPONSE: 1011,
  GETSELECTEDTIPHASHREQUEST: 1012,
  GETSELECTEDTIPHASHRESPONSE: 1013,
  GETMEMPOOLENTRYREQUEST: 1014,
  GETMEMPOOLENTRYRESPONSE: 1015,
  GETCONNECTEDPEERINFOREQUEST: 1016,
  GETCONNECTEDPEERINFORESPONSE: 1017,
  ADDPEERREQUEST: 1018,
  ADDPEERRESPONSE: 1019,
  SUBMITTRANSACTIONREQUEST: 1020,
  SUBMITTRANSACTIONRESPONSE: 1021,
  NOTIFYCHAINCHANGEDREQUEST: 1022,
  NOTIFYCHAINCHANGEDRESPONSE: 1023,
  CHAINCHANGEDNOTIFICATION: 1024,
  GETBLOCKREQUEST: 1025,
  GETBLOCKRESPONSE: 1026,
  GETSUBNETWORKREQUEST: 1027,
  GETSUBNETWORKRESPONSE: 1028,
  GETCHAINFROMBLOCKREQUEST: 1029,
  GETCHAINFROMBLOCKRESPONSE: 1030,
  GETBLOCKSREQUEST: 1031,
  GETBLOCKSRESPONSE: 1032,
  GETBLOCKCOUNTREQUEST: 1033,
  GETBLOCKCOUNTRESPONSE: 1034,
  GETBLOCKDAGINFOREQUEST: 1035,
  GETBLOCKDAGINFORESPONSE: 1036,
  RESOLVEFINALITYCONFLICTREQUEST: 1037,
  RESOLVEFINALITYCONFLICTRESPONSE: 1038,
  NOTIFYFINALITYCONFLICTSREQUEST: 1039,
  NOTIFYFINALITYCONFLICTSRESPONSE: 1040,
  FINALITYCONFLICTNOTIFICATION: 1041,
  FINALITYCONFLICTRESOLVEDNOTIFICATION: 1042,
  GETMEMPOOLENTRIESREQUEST: 1043,
  GETMEMPOOLENTRIESRESPONSE: 1044,
  SHUTDOWNREQUEST: 1045,
  SHUTDOWNRESPONSE: 1046,
  GETHEADERSREQUEST: 1047,
  GETHEADERSRESPONSE: 1048,
  NOTIFYTRANSACTIONADDEDREQUEST: 1049,
  NOTIFYTRANSACTIONADDEDRESPONSE: 1050,
  TRANSACTIONADDEDNOTIFICATION: 1051,
  NOTIFYUTXOOFADDRESSCHANGEDREQUESTMESSAGE: 1052,
  NOTIFYUTXOOFADDRESSCHANGEDRESPONSEMESSAGE: 1053,
  UTXOOFADDRESSCHANGEDNOTIFICATIONMESSAGE: 1054
};

/**
 * @return {proto.protowire.KaspadMessage.PayloadCase}
 */
proto.protowire.KaspadMessage.prototype.getPayloadCase = function() {
  return /** @type {proto.protowire.KaspadMessage.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.protowire.KaspadMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.KaspadMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.KaspadMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.KaspadMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.KaspadMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    addresses: (f = msg.getAddresses()) && proto.protowire.AddressesMessage.toObject(includeInstance, f),
    block: (f = msg.getBlock()) && proto.protowire.BlockMessage.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && proto.protowire.TransactionMessage.toObject(includeInstance, f),
    requestblocklocator: (f = msg.getRequestblocklocator()) && proto.protowire.RequestBlockLocatorMessage.toObject(includeInstance, f),
    blocklocator: (f = msg.getBlocklocator()) && proto.protowire.BlockLocatorMessage.toObject(includeInstance, f),
    requestaddresses: (f = msg.getRequestaddresses()) && proto.protowire.RequestAddressesMessage.toObject(includeInstance, f),
    requestibdblocks: (f = msg.getRequestibdblocks()) && proto.protowire.RequestIBDBlocksMessage.toObject(includeInstance, f),
    requestnextibdblocks: (f = msg.getRequestnextibdblocks()) && proto.protowire.RequestNextIBDBlocksMessage.toObject(includeInstance, f),
    doneibdblocks: (f = msg.getDoneibdblocks()) && proto.protowire.DoneIBDBlocksMessage.toObject(includeInstance, f),
    requestrelayblocks: (f = msg.getRequestrelayblocks()) && proto.protowire.RequestRelayBlocksMessage.toObject(includeInstance, f),
    requestselectedtip: (f = msg.getRequestselectedtip()) && proto.protowire.RequestSelectedTipMessage.toObject(includeInstance, f),
    requesttransactions: (f = msg.getRequesttransactions()) && proto.protowire.RequestTransactionsMessage.toObject(includeInstance, f),
    ibdblock: (f = msg.getIbdblock()) && proto.protowire.BlockMessage.toObject(includeInstance, f),
    invrelayblock: (f = msg.getInvrelayblock()) && proto.protowire.InvRelayBlockMessage.toObject(includeInstance, f),
    invtransactions: (f = msg.getInvtransactions()) && proto.protowire.InvTransactionsMessage.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.protowire.PingMessage.toObject(includeInstance, f),
    pong: (f = msg.getPong()) && proto.protowire.PongMessage.toObject(includeInstance, f),
    selectedtip: (f = msg.getSelectedtip()) && proto.protowire.SelectedTipMessage.toObject(includeInstance, f),
    verack: (f = msg.getVerack()) && proto.protowire.VerackMessage.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && proto.protowire.VersionMessage.toObject(includeInstance, f),
    transactionnotfound: (f = msg.getTransactionnotfound()) && proto.protowire.TransactionNotFoundMessage.toObject(includeInstance, f),
    reject: (f = msg.getReject()) && proto.protowire.RejectMessage.toObject(includeInstance, f),
    getcurrentnetworkrequest: (f = msg.getGetcurrentnetworkrequest()) && proto.protowire.GetCurrentNetworkRequestMessage.toObject(includeInstance, f),
    getcurrentnetworkresponse: (f = msg.getGetcurrentnetworkresponse()) && proto.protowire.GetCurrentNetworkResponseMessage.toObject(includeInstance, f),
    submitblockrequest: (f = msg.getSubmitblockrequest()) && proto.protowire.SubmitBlockRequestMessage.toObject(includeInstance, f),
    submitblockresponse: (f = msg.getSubmitblockresponse()) && proto.protowire.SubmitBlockResponseMessage.toObject(includeInstance, f),
    getblocktemplaterequest: (f = msg.getGetblocktemplaterequest()) && proto.protowire.GetBlockTemplateRequestMessage.toObject(includeInstance, f),
    getblocktemplateresponse: (f = msg.getGetblocktemplateresponse()) && proto.protowire.GetBlockTemplateResponseMessage.toObject(includeInstance, f),
    notifyblockaddedrequest: (f = msg.getNotifyblockaddedrequest()) && proto.protowire.NotifyBlockAddedRequestMessage.toObject(includeInstance, f),
    notifyblockaddedresponse: (f = msg.getNotifyblockaddedresponse()) && proto.protowire.NotifyBlockAddedResponseMessage.toObject(includeInstance, f),
    blockaddednotification: (f = msg.getBlockaddednotification()) && proto.protowire.BlockAddedNotificationMessage.toObject(includeInstance, f),
    getpeeraddressesrequest: (f = msg.getGetpeeraddressesrequest()) && proto.protowire.GetPeerAddressesRequestMessage.toObject(includeInstance, f),
    getpeeraddressesresponse: (f = msg.getGetpeeraddressesresponse()) && proto.protowire.GetPeerAddressesResponseMessage.toObject(includeInstance, f),
    getselectedtiphashrequest: (f = msg.getGetselectedtiphashrequest()) && proto.protowire.GetSelectedTipHashRequestMessage.toObject(includeInstance, f),
    getselectedtiphashresponse: (f = msg.getGetselectedtiphashresponse()) && proto.protowire.GetSelectedTipHashResponseMessage.toObject(includeInstance, f),
    getmempoolentryrequest: (f = msg.getGetmempoolentryrequest()) && proto.protowire.GetMempoolEntryRequestMessage.toObject(includeInstance, f),
    getmempoolentryresponse: (f = msg.getGetmempoolentryresponse()) && proto.protowire.GetMempoolEntryResponseMessage.toObject(includeInstance, f),
    getconnectedpeerinforequest: (f = msg.getGetconnectedpeerinforequest()) && proto.protowire.GetConnectedPeerInfoRequestMessage.toObject(includeInstance, f),
    getconnectedpeerinforesponse: (f = msg.getGetconnectedpeerinforesponse()) && proto.protowire.GetConnectedPeerInfoResponseMessage.toObject(includeInstance, f),
    addpeerrequest: (f = msg.getAddpeerrequest()) && proto.protowire.AddPeerRequestMessage.toObject(includeInstance, f),
    addpeerresponse: (f = msg.getAddpeerresponse()) && proto.protowire.AddPeerResponseMessage.toObject(includeInstance, f),
    submittransactionrequest: (f = msg.getSubmittransactionrequest()) && proto.protowire.SubmitTransactionRequestMessage.toObject(includeInstance, f),
    submittransactionresponse: (f = msg.getSubmittransactionresponse()) && proto.protowire.SubmitTransactionResponseMessage.toObject(includeInstance, f),
    notifychainchangedrequest: (f = msg.getNotifychainchangedrequest()) && proto.protowire.NotifyChainChangedRequestMessage.toObject(includeInstance, f),
    notifychainchangedresponse: (f = msg.getNotifychainchangedresponse()) && proto.protowire.NotifyChainChangedResponseMessage.toObject(includeInstance, f),
    chainchangednotification: (f = msg.getChainchangednotification()) && proto.protowire.ChainChangedNotificationMessage.toObject(includeInstance, f),
    getblockrequest: (f = msg.getGetblockrequest()) && proto.protowire.GetBlockRequestMessage.toObject(includeInstance, f),
    getblockresponse: (f = msg.getGetblockresponse()) && proto.protowire.GetBlockResponseMessage.toObject(includeInstance, f),
    getsubnetworkrequest: (f = msg.getGetsubnetworkrequest()) && proto.protowire.GetSubnetworkRequestMessage.toObject(includeInstance, f),
    getsubnetworkresponse: (f = msg.getGetsubnetworkresponse()) && proto.protowire.GetSubnetworkResponseMessage.toObject(includeInstance, f),
    getchainfromblockrequest: (f = msg.getGetchainfromblockrequest()) && proto.protowire.GetChainFromBlockRequestMessage.toObject(includeInstance, f),
    getchainfromblockresponse: (f = msg.getGetchainfromblockresponse()) && proto.protowire.GetChainFromBlockResponseMessage.toObject(includeInstance, f),
    getblocksrequest: (f = msg.getGetblocksrequest()) && proto.protowire.GetBlocksRequestMessage.toObject(includeInstance, f),
    getblocksresponse: (f = msg.getGetblocksresponse()) && proto.protowire.GetBlocksResponseMessage.toObject(includeInstance, f),
    getblockcountrequest: (f = msg.getGetblockcountrequest()) && proto.protowire.GetBlockCountRequestMessage.toObject(includeInstance, f),
    getblockcountresponse: (f = msg.getGetblockcountresponse()) && proto.protowire.GetBlockCountResponseMessage.toObject(includeInstance, f),
    getblockdaginforequest: (f = msg.getGetblockdaginforequest()) && proto.protowire.GetBlockDagInfoRequestMessage.toObject(includeInstance, f),
    getblockdaginforesponse: (f = msg.getGetblockdaginforesponse()) && proto.protowire.GetBlockDagInfoResponseMessage.toObject(includeInstance, f),
    resolvefinalityconflictrequest: (f = msg.getResolvefinalityconflictrequest()) && proto.protowire.ResolveFinalityConflictRequestMessage.toObject(includeInstance, f),
    resolvefinalityconflictresponse: (f = msg.getResolvefinalityconflictresponse()) && proto.protowire.ResolveFinalityConflictResponseMessage.toObject(includeInstance, f),
    notifyfinalityconflictsrequest: (f = msg.getNotifyfinalityconflictsrequest()) && proto.protowire.NotifyFinalityConflictsRequestMessage.toObject(includeInstance, f),
    notifyfinalityconflictsresponse: (f = msg.getNotifyfinalityconflictsresponse()) && proto.protowire.NotifyFinalityConflictsResponseMessage.toObject(includeInstance, f),
    finalityconflictnotification: (f = msg.getFinalityconflictnotification()) && proto.protowire.FinalityConflictNotificationMessage.toObject(includeInstance, f),
    finalityconflictresolvednotification: (f = msg.getFinalityconflictresolvednotification()) && proto.protowire.FinalityConflictResolvedNotificationMessage.toObject(includeInstance, f),
    getmempoolentriesrequest: (f = msg.getGetmempoolentriesrequest()) && proto.protowire.GetMempoolEntriesRequestMessage.toObject(includeInstance, f),
    getmempoolentriesresponse: (f = msg.getGetmempoolentriesresponse()) && proto.protowire.GetMempoolEntriesResponseMessage.toObject(includeInstance, f),
    shutdownrequest: (f = msg.getShutdownrequest()) && proto.protowire.ShutDownRequestMessage.toObject(includeInstance, f),
    shutdownresponse: (f = msg.getShutdownresponse()) && proto.protowire.ShutDownResponseMessage.toObject(includeInstance, f),
    getheadersrequest: (f = msg.getGetheadersrequest()) && proto.protowire.GetHeadersRequestMessage.toObject(includeInstance, f),
    getheadersresponse: (f = msg.getGetheadersresponse()) && proto.protowire.GetHeadersResponseMessage.toObject(includeInstance, f),
    notifytransactionaddedrequest: (f = msg.getNotifytransactionaddedrequest()) && proto.protowire.NotifyTransactionAddedRequestMessage.toObject(includeInstance, f),
    notifytransactionaddedresponse: (f = msg.getNotifytransactionaddedresponse()) && proto.protowire.NotifyTransactionAddedResponseMessage.toObject(includeInstance, f),
    transactionaddednotification: (f = msg.getTransactionaddednotification()) && proto.protowire.TransactionAddedNotificationMessage.toObject(includeInstance, f),
    notifyutxoofaddresschangedrequestmessage: (f = msg.getNotifyutxoofaddresschangedrequestmessage()) && proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.toObject(includeInstance, f),
    notifyutxoofaddresschangedresponsemessage: (f = msg.getNotifyutxoofaddresschangedresponsemessage()) && proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.toObject(includeInstance, f),
    utxoofaddresschangednotificationmessage: (f = msg.getUtxoofaddresschangednotificationmessage()) && proto.protowire.UTXOOfAddressChangedNotificationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.KaspadMessage}
 */
proto.protowire.KaspadMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.KaspadMessage;
  return proto.protowire.KaspadMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.KaspadMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.KaspadMessage}
 */
proto.protowire.KaspadMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.AddressesMessage;
      reader.readMessage(value,proto.protowire.AddressesMessage.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 2:
      var value = new proto.protowire.BlockMessage;
      reader.readMessage(value,proto.protowire.BlockMessage.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 3:
      var value = new proto.protowire.TransactionMessage;
      reader.readMessage(value,proto.protowire.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 4:
      var value = new proto.protowire.RequestBlockLocatorMessage;
      reader.readMessage(value,proto.protowire.RequestBlockLocatorMessage.deserializeBinaryFromReader);
      msg.setRequestblocklocator(value);
      break;
    case 5:
      var value = new proto.protowire.BlockLocatorMessage;
      reader.readMessage(value,proto.protowire.BlockLocatorMessage.deserializeBinaryFromReader);
      msg.setBlocklocator(value);
      break;
    case 6:
      var value = new proto.protowire.RequestAddressesMessage;
      reader.readMessage(value,proto.protowire.RequestAddressesMessage.deserializeBinaryFromReader);
      msg.setRequestaddresses(value);
      break;
    case 7:
      var value = new proto.protowire.RequestIBDBlocksMessage;
      reader.readMessage(value,proto.protowire.RequestIBDBlocksMessage.deserializeBinaryFromReader);
      msg.setRequestibdblocks(value);
      break;
    case 8:
      var value = new proto.protowire.RequestNextIBDBlocksMessage;
      reader.readMessage(value,proto.protowire.RequestNextIBDBlocksMessage.deserializeBinaryFromReader);
      msg.setRequestnextibdblocks(value);
      break;
    case 9:
      var value = new proto.protowire.DoneIBDBlocksMessage;
      reader.readMessage(value,proto.protowire.DoneIBDBlocksMessage.deserializeBinaryFromReader);
      msg.setDoneibdblocks(value);
      break;
    case 10:
      var value = new proto.protowire.RequestRelayBlocksMessage;
      reader.readMessage(value,proto.protowire.RequestRelayBlocksMessage.deserializeBinaryFromReader);
      msg.setRequestrelayblocks(value);
      break;
    case 11:
      var value = new proto.protowire.RequestSelectedTipMessage;
      reader.readMessage(value,proto.protowire.RequestSelectedTipMessage.deserializeBinaryFromReader);
      msg.setRequestselectedtip(value);
      break;
    case 12:
      var value = new proto.protowire.RequestTransactionsMessage;
      reader.readMessage(value,proto.protowire.RequestTransactionsMessage.deserializeBinaryFromReader);
      msg.setRequesttransactions(value);
      break;
    case 13:
      var value = new proto.protowire.BlockMessage;
      reader.readMessage(value,proto.protowire.BlockMessage.deserializeBinaryFromReader);
      msg.setIbdblock(value);
      break;
    case 14:
      var value = new proto.protowire.InvRelayBlockMessage;
      reader.readMessage(value,proto.protowire.InvRelayBlockMessage.deserializeBinaryFromReader);
      msg.setInvrelayblock(value);
      break;
    case 15:
      var value = new proto.protowire.InvTransactionsMessage;
      reader.readMessage(value,proto.protowire.InvTransactionsMessage.deserializeBinaryFromReader);
      msg.setInvtransactions(value);
      break;
    case 16:
      var value = new proto.protowire.PingMessage;
      reader.readMessage(value,proto.protowire.PingMessage.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 17:
      var value = new proto.protowire.PongMessage;
      reader.readMessage(value,proto.protowire.PongMessage.deserializeBinaryFromReader);
      msg.setPong(value);
      break;
    case 18:
      var value = new proto.protowire.SelectedTipMessage;
      reader.readMessage(value,proto.protowire.SelectedTipMessage.deserializeBinaryFromReader);
      msg.setSelectedtip(value);
      break;
    case 19:
      var value = new proto.protowire.VerackMessage;
      reader.readMessage(value,proto.protowire.VerackMessage.deserializeBinaryFromReader);
      msg.setVerack(value);
      break;
    case 20:
      var value = new proto.protowire.VersionMessage;
      reader.readMessage(value,proto.protowire.VersionMessage.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 21:
      var value = new proto.protowire.TransactionNotFoundMessage;
      reader.readMessage(value,proto.protowire.TransactionNotFoundMessage.deserializeBinaryFromReader);
      msg.setTransactionnotfound(value);
      break;
    case 22:
      var value = new proto.protowire.RejectMessage;
      reader.readMessage(value,proto.protowire.RejectMessage.deserializeBinaryFromReader);
      msg.setReject(value);
      break;
    case 1001:
      var value = new proto.protowire.GetCurrentNetworkRequestMessage;
      reader.readMessage(value,proto.protowire.GetCurrentNetworkRequestMessage.deserializeBinaryFromReader);
      msg.setGetcurrentnetworkrequest(value);
      break;
    case 1002:
      var value = new proto.protowire.GetCurrentNetworkResponseMessage;
      reader.readMessage(value,proto.protowire.GetCurrentNetworkResponseMessage.deserializeBinaryFromReader);
      msg.setGetcurrentnetworkresponse(value);
      break;
    case 1003:
      var value = new proto.protowire.SubmitBlockRequestMessage;
      reader.readMessage(value,proto.protowire.SubmitBlockRequestMessage.deserializeBinaryFromReader);
      msg.setSubmitblockrequest(value);
      break;
    case 1004:
      var value = new proto.protowire.SubmitBlockResponseMessage;
      reader.readMessage(value,proto.protowire.SubmitBlockResponseMessage.deserializeBinaryFromReader);
      msg.setSubmitblockresponse(value);
      break;
    case 1005:
      var value = new proto.protowire.GetBlockTemplateRequestMessage;
      reader.readMessage(value,proto.protowire.GetBlockTemplateRequestMessage.deserializeBinaryFromReader);
      msg.setGetblocktemplaterequest(value);
      break;
    case 1006:
      var value = new proto.protowire.GetBlockTemplateResponseMessage;
      reader.readMessage(value,proto.protowire.GetBlockTemplateResponseMessage.deserializeBinaryFromReader);
      msg.setGetblocktemplateresponse(value);
      break;
    case 1007:
      var value = new proto.protowire.NotifyBlockAddedRequestMessage;
      reader.readMessage(value,proto.protowire.NotifyBlockAddedRequestMessage.deserializeBinaryFromReader);
      msg.setNotifyblockaddedrequest(value);
      break;
    case 1008:
      var value = new proto.protowire.NotifyBlockAddedResponseMessage;
      reader.readMessage(value,proto.protowire.NotifyBlockAddedResponseMessage.deserializeBinaryFromReader);
      msg.setNotifyblockaddedresponse(value);
      break;
    case 1009:
      var value = new proto.protowire.BlockAddedNotificationMessage;
      reader.readMessage(value,proto.protowire.BlockAddedNotificationMessage.deserializeBinaryFromReader);
      msg.setBlockaddednotification(value);
      break;
    case 1010:
      var value = new proto.protowire.GetPeerAddressesRequestMessage;
      reader.readMessage(value,proto.protowire.GetPeerAddressesRequestMessage.deserializeBinaryFromReader);
      msg.setGetpeeraddressesrequest(value);
      break;
    case 1011:
      var value = new proto.protowire.GetPeerAddressesResponseMessage;
      reader.readMessage(value,proto.protowire.GetPeerAddressesResponseMessage.deserializeBinaryFromReader);
      msg.setGetpeeraddressesresponse(value);
      break;
    case 1012:
      var value = new proto.protowire.GetSelectedTipHashRequestMessage;
      reader.readMessage(value,proto.protowire.GetSelectedTipHashRequestMessage.deserializeBinaryFromReader);
      msg.setGetselectedtiphashrequest(value);
      break;
    case 1013:
      var value = new proto.protowire.GetSelectedTipHashResponseMessage;
      reader.readMessage(value,proto.protowire.GetSelectedTipHashResponseMessage.deserializeBinaryFromReader);
      msg.setGetselectedtiphashresponse(value);
      break;
    case 1014:
      var value = new proto.protowire.GetMempoolEntryRequestMessage;
      reader.readMessage(value,proto.protowire.GetMempoolEntryRequestMessage.deserializeBinaryFromReader);
      msg.setGetmempoolentryrequest(value);
      break;
    case 1015:
      var value = new proto.protowire.GetMempoolEntryResponseMessage;
      reader.readMessage(value,proto.protowire.GetMempoolEntryResponseMessage.deserializeBinaryFromReader);
      msg.setGetmempoolentryresponse(value);
      break;
    case 1016:
      var value = new proto.protowire.GetConnectedPeerInfoRequestMessage;
      reader.readMessage(value,proto.protowire.GetConnectedPeerInfoRequestMessage.deserializeBinaryFromReader);
      msg.setGetconnectedpeerinforequest(value);
      break;
    case 1017:
      var value = new proto.protowire.GetConnectedPeerInfoResponseMessage;
      reader.readMessage(value,proto.protowire.GetConnectedPeerInfoResponseMessage.deserializeBinaryFromReader);
      msg.setGetconnectedpeerinforesponse(value);
      break;
    case 1018:
      var value = new proto.protowire.AddPeerRequestMessage;
      reader.readMessage(value,proto.protowire.AddPeerRequestMessage.deserializeBinaryFromReader);
      msg.setAddpeerrequest(value);
      break;
    case 1019:
      var value = new proto.protowire.AddPeerResponseMessage;
      reader.readMessage(value,proto.protowire.AddPeerResponseMessage.deserializeBinaryFromReader);
      msg.setAddpeerresponse(value);
      break;
    case 1020:
      var value = new proto.protowire.SubmitTransactionRequestMessage;
      reader.readMessage(value,proto.protowire.SubmitTransactionRequestMessage.deserializeBinaryFromReader);
      msg.setSubmittransactionrequest(value);
      break;
    case 1021:
      var value = new proto.protowire.SubmitTransactionResponseMessage;
      reader.readMessage(value,proto.protowire.SubmitTransactionResponseMessage.deserializeBinaryFromReader);
      msg.setSubmittransactionresponse(value);
      break;
    case 1022:
      var value = new proto.protowire.NotifyChainChangedRequestMessage;
      reader.readMessage(value,proto.protowire.NotifyChainChangedRequestMessage.deserializeBinaryFromReader);
      msg.setNotifychainchangedrequest(value);
      break;
    case 1023:
      var value = new proto.protowire.NotifyChainChangedResponseMessage;
      reader.readMessage(value,proto.protowire.NotifyChainChangedResponseMessage.deserializeBinaryFromReader);
      msg.setNotifychainchangedresponse(value);
      break;
    case 1024:
      var value = new proto.protowire.ChainChangedNotificationMessage;
      reader.readMessage(value,proto.protowire.ChainChangedNotificationMessage.deserializeBinaryFromReader);
      msg.setChainchangednotification(value);
      break;
    case 1025:
      var value = new proto.protowire.GetBlockRequestMessage;
      reader.readMessage(value,proto.protowire.GetBlockRequestMessage.deserializeBinaryFromReader);
      msg.setGetblockrequest(value);
      break;
    case 1026:
      var value = new proto.protowire.GetBlockResponseMessage;
      reader.readMessage(value,proto.protowire.GetBlockResponseMessage.deserializeBinaryFromReader);
      msg.setGetblockresponse(value);
      break;
    case 1027:
      var value = new proto.protowire.GetSubnetworkRequestMessage;
      reader.readMessage(value,proto.protowire.GetSubnetworkRequestMessage.deserializeBinaryFromReader);
      msg.setGetsubnetworkrequest(value);
      break;
    case 1028:
      var value = new proto.protowire.GetSubnetworkResponseMessage;
      reader.readMessage(value,proto.protowire.GetSubnetworkResponseMessage.deserializeBinaryFromReader);
      msg.setGetsubnetworkresponse(value);
      break;
    case 1029:
      var value = new proto.protowire.GetChainFromBlockRequestMessage;
      reader.readMessage(value,proto.protowire.GetChainFromBlockRequestMessage.deserializeBinaryFromReader);
      msg.setGetchainfromblockrequest(value);
      break;
    case 1030:
      var value = new proto.protowire.GetChainFromBlockResponseMessage;
      reader.readMessage(value,proto.protowire.GetChainFromBlockResponseMessage.deserializeBinaryFromReader);
      msg.setGetchainfromblockresponse(value);
      break;
    case 1031:
      var value = new proto.protowire.GetBlocksRequestMessage;
      reader.readMessage(value,proto.protowire.GetBlocksRequestMessage.deserializeBinaryFromReader);
      msg.setGetblocksrequest(value);
      break;
    case 1032:
      var value = new proto.protowire.GetBlocksResponseMessage;
      reader.readMessage(value,proto.protowire.GetBlocksResponseMessage.deserializeBinaryFromReader);
      msg.setGetblocksresponse(value);
      break;
    case 1033:
      var value = new proto.protowire.GetBlockCountRequestMessage;
      reader.readMessage(value,proto.protowire.GetBlockCountRequestMessage.deserializeBinaryFromReader);
      msg.setGetblockcountrequest(value);
      break;
    case 1034:
      var value = new proto.protowire.GetBlockCountResponseMessage;
      reader.readMessage(value,proto.protowire.GetBlockCountResponseMessage.deserializeBinaryFromReader);
      msg.setGetblockcountresponse(value);
      break;
    case 1035:
      var value = new proto.protowire.GetBlockDagInfoRequestMessage;
      reader.readMessage(value,proto.protowire.GetBlockDagInfoRequestMessage.deserializeBinaryFromReader);
      msg.setGetblockdaginforequest(value);
      break;
    case 1036:
      var value = new proto.protowire.GetBlockDagInfoResponseMessage;
      reader.readMessage(value,proto.protowire.GetBlockDagInfoResponseMessage.deserializeBinaryFromReader);
      msg.setGetblockdaginforesponse(value);
      break;
    case 1037:
      var value = new proto.protowire.ResolveFinalityConflictRequestMessage;
      reader.readMessage(value,proto.protowire.ResolveFinalityConflictRequestMessage.deserializeBinaryFromReader);
      msg.setResolvefinalityconflictrequest(value);
      break;
    case 1038:
      var value = new proto.protowire.ResolveFinalityConflictResponseMessage;
      reader.readMessage(value,proto.protowire.ResolveFinalityConflictResponseMessage.deserializeBinaryFromReader);
      msg.setResolvefinalityconflictresponse(value);
      break;
    case 1039:
      var value = new proto.protowire.NotifyFinalityConflictsRequestMessage;
      reader.readMessage(value,proto.protowire.NotifyFinalityConflictsRequestMessage.deserializeBinaryFromReader);
      msg.setNotifyfinalityconflictsrequest(value);
      break;
    case 1040:
      var value = new proto.protowire.NotifyFinalityConflictsResponseMessage;
      reader.readMessage(value,proto.protowire.NotifyFinalityConflictsResponseMessage.deserializeBinaryFromReader);
      msg.setNotifyfinalityconflictsresponse(value);
      break;
    case 1041:
      var value = new proto.protowire.FinalityConflictNotificationMessage;
      reader.readMessage(value,proto.protowire.FinalityConflictNotificationMessage.deserializeBinaryFromReader);
      msg.setFinalityconflictnotification(value);
      break;
    case 1042:
      var value = new proto.protowire.FinalityConflictResolvedNotificationMessage;
      reader.readMessage(value,proto.protowire.FinalityConflictResolvedNotificationMessage.deserializeBinaryFromReader);
      msg.setFinalityconflictresolvednotification(value);
      break;
    case 1043:
      var value = new proto.protowire.GetMempoolEntriesRequestMessage;
      reader.readMessage(value,proto.protowire.GetMempoolEntriesRequestMessage.deserializeBinaryFromReader);
      msg.setGetmempoolentriesrequest(value);
      break;
    case 1044:
      var value = new proto.protowire.GetMempoolEntriesResponseMessage;
      reader.readMessage(value,proto.protowire.GetMempoolEntriesResponseMessage.deserializeBinaryFromReader);
      msg.setGetmempoolentriesresponse(value);
      break;
    case 1045:
      var value = new proto.protowire.ShutDownRequestMessage;
      reader.readMessage(value,proto.protowire.ShutDownRequestMessage.deserializeBinaryFromReader);
      msg.setShutdownrequest(value);
      break;
    case 1046:
      var value = new proto.protowire.ShutDownResponseMessage;
      reader.readMessage(value,proto.protowire.ShutDownResponseMessage.deserializeBinaryFromReader);
      msg.setShutdownresponse(value);
      break;
    case 1047:
      var value = new proto.protowire.GetHeadersRequestMessage;
      reader.readMessage(value,proto.protowire.GetHeadersRequestMessage.deserializeBinaryFromReader);
      msg.setGetheadersrequest(value);
      break;
    case 1048:
      var value = new proto.protowire.GetHeadersResponseMessage;
      reader.readMessage(value,proto.protowire.GetHeadersResponseMessage.deserializeBinaryFromReader);
      msg.setGetheadersresponse(value);
      break;
    case 1049:
      var value = new proto.protowire.NotifyTransactionAddedRequestMessage;
      reader.readMessage(value,proto.protowire.NotifyTransactionAddedRequestMessage.deserializeBinaryFromReader);
      msg.setNotifytransactionaddedrequest(value);
      break;
    case 1050:
      var value = new proto.protowire.NotifyTransactionAddedResponseMessage;
      reader.readMessage(value,proto.protowire.NotifyTransactionAddedResponseMessage.deserializeBinaryFromReader);
      msg.setNotifytransactionaddedresponse(value);
      break;
    case 1051:
      var value = new proto.protowire.TransactionAddedNotificationMessage;
      reader.readMessage(value,proto.protowire.TransactionAddedNotificationMessage.deserializeBinaryFromReader);
      msg.setTransactionaddednotification(value);
      break;
    case 1052:
      var value = new proto.protowire.NotifyUTXOOfAddressChangedRequestMessage;
      reader.readMessage(value,proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.deserializeBinaryFromReader);
      msg.setNotifyutxoofaddresschangedrequestmessage(value);
      break;
    case 1053:
      var value = new proto.protowire.NotifyUTXOOfAddressChangedResponseMessage;
      reader.readMessage(value,proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.deserializeBinaryFromReader);
      msg.setNotifyutxoofaddresschangedresponsemessage(value);
      break;
    case 1054:
      var value = new proto.protowire.UTXOOfAddressChangedNotificationMessage;
      reader.readMessage(value,proto.protowire.UTXOOfAddressChangedNotificationMessage.deserializeBinaryFromReader);
      msg.setUtxoofaddresschangednotificationmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.KaspadMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.KaspadMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.KaspadMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.KaspadMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.AddressesMessage.serializeBinaryToWriter
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protowire.BlockMessage.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protowire.TransactionMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestblocklocator();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protowire.RequestBlockLocatorMessage.serializeBinaryToWriter
    );
  }
  f = message.getBlocklocator();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protowire.BlockLocatorMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestaddresses();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.protowire.RequestAddressesMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestibdblocks();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protowire.RequestIBDBlocksMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestnextibdblocks();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.protowire.RequestNextIBDBlocksMessage.serializeBinaryToWriter
    );
  }
  f = message.getDoneibdblocks();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.protowire.DoneIBDBlocksMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestrelayblocks();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.protowire.RequestRelayBlocksMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestselectedtip();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.protowire.RequestSelectedTipMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequesttransactions();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.protowire.RequestTransactionsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIbdblock();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.protowire.BlockMessage.serializeBinaryToWriter
    );
  }
  f = message.getInvrelayblock();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.protowire.InvRelayBlockMessage.serializeBinaryToWriter
    );
  }
  f = message.getInvtransactions();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.protowire.InvTransactionsMessage.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.protowire.PingMessage.serializeBinaryToWriter
    );
  }
  f = message.getPong();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.protowire.PongMessage.serializeBinaryToWriter
    );
  }
  f = message.getSelectedtip();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.protowire.SelectedTipMessage.serializeBinaryToWriter
    );
  }
  f = message.getVerack();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.protowire.VerackMessage.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.protowire.VersionMessage.serializeBinaryToWriter
    );
  }
  f = message.getTransactionnotfound();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.protowire.TransactionNotFoundMessage.serializeBinaryToWriter
    );
  }
  f = message.getReject();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.protowire.RejectMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetcurrentnetworkrequest();
  if (f != null) {
    writer.writeMessage(
      1001,
      f,
      proto.protowire.GetCurrentNetworkRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetcurrentnetworkresponse();
  if (f != null) {
    writer.writeMessage(
      1002,
      f,
      proto.protowire.GetCurrentNetworkResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getSubmitblockrequest();
  if (f != null) {
    writer.writeMessage(
      1003,
      f,
      proto.protowire.SubmitBlockRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getSubmitblockresponse();
  if (f != null) {
    writer.writeMessage(
      1004,
      f,
      proto.protowire.SubmitBlockResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblocktemplaterequest();
  if (f != null) {
    writer.writeMessage(
      1005,
      f,
      proto.protowire.GetBlockTemplateRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblocktemplateresponse();
  if (f != null) {
    writer.writeMessage(
      1006,
      f,
      proto.protowire.GetBlockTemplateResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifyblockaddedrequest();
  if (f != null) {
    writer.writeMessage(
      1007,
      f,
      proto.protowire.NotifyBlockAddedRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifyblockaddedresponse();
  if (f != null) {
    writer.writeMessage(
      1008,
      f,
      proto.protowire.NotifyBlockAddedResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getBlockaddednotification();
  if (f != null) {
    writer.writeMessage(
      1009,
      f,
      proto.protowire.BlockAddedNotificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetpeeraddressesrequest();
  if (f != null) {
    writer.writeMessage(
      1010,
      f,
      proto.protowire.GetPeerAddressesRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetpeeraddressesresponse();
  if (f != null) {
    writer.writeMessage(
      1011,
      f,
      proto.protowire.GetPeerAddressesResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetselectedtiphashrequest();
  if (f != null) {
    writer.writeMessage(
      1012,
      f,
      proto.protowire.GetSelectedTipHashRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetselectedtiphashresponse();
  if (f != null) {
    writer.writeMessage(
      1013,
      f,
      proto.protowire.GetSelectedTipHashResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetmempoolentryrequest();
  if (f != null) {
    writer.writeMessage(
      1014,
      f,
      proto.protowire.GetMempoolEntryRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetmempoolentryresponse();
  if (f != null) {
    writer.writeMessage(
      1015,
      f,
      proto.protowire.GetMempoolEntryResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetconnectedpeerinforequest();
  if (f != null) {
    writer.writeMessage(
      1016,
      f,
      proto.protowire.GetConnectedPeerInfoRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetconnectedpeerinforesponse();
  if (f != null) {
    writer.writeMessage(
      1017,
      f,
      proto.protowire.GetConnectedPeerInfoResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getAddpeerrequest();
  if (f != null) {
    writer.writeMessage(
      1018,
      f,
      proto.protowire.AddPeerRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getAddpeerresponse();
  if (f != null) {
    writer.writeMessage(
      1019,
      f,
      proto.protowire.AddPeerResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getSubmittransactionrequest();
  if (f != null) {
    writer.writeMessage(
      1020,
      f,
      proto.protowire.SubmitTransactionRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getSubmittransactionresponse();
  if (f != null) {
    writer.writeMessage(
      1021,
      f,
      proto.protowire.SubmitTransactionResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifychainchangedrequest();
  if (f != null) {
    writer.writeMessage(
      1022,
      f,
      proto.protowire.NotifyChainChangedRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifychainchangedresponse();
  if (f != null) {
    writer.writeMessage(
      1023,
      f,
      proto.protowire.NotifyChainChangedResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getChainchangednotification();
  if (f != null) {
    writer.writeMessage(
      1024,
      f,
      proto.protowire.ChainChangedNotificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblockrequest();
  if (f != null) {
    writer.writeMessage(
      1025,
      f,
      proto.protowire.GetBlockRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblockresponse();
  if (f != null) {
    writer.writeMessage(
      1026,
      f,
      proto.protowire.GetBlockResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetsubnetworkrequest();
  if (f != null) {
    writer.writeMessage(
      1027,
      f,
      proto.protowire.GetSubnetworkRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetsubnetworkresponse();
  if (f != null) {
    writer.writeMessage(
      1028,
      f,
      proto.protowire.GetSubnetworkResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetchainfromblockrequest();
  if (f != null) {
    writer.writeMessage(
      1029,
      f,
      proto.protowire.GetChainFromBlockRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetchainfromblockresponse();
  if (f != null) {
    writer.writeMessage(
      1030,
      f,
      proto.protowire.GetChainFromBlockResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblocksrequest();
  if (f != null) {
    writer.writeMessage(
      1031,
      f,
      proto.protowire.GetBlocksRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblocksresponse();
  if (f != null) {
    writer.writeMessage(
      1032,
      f,
      proto.protowire.GetBlocksResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblockcountrequest();
  if (f != null) {
    writer.writeMessage(
      1033,
      f,
      proto.protowire.GetBlockCountRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblockcountresponse();
  if (f != null) {
    writer.writeMessage(
      1034,
      f,
      proto.protowire.GetBlockCountResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblockdaginforequest();
  if (f != null) {
    writer.writeMessage(
      1035,
      f,
      proto.protowire.GetBlockDagInfoRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetblockdaginforesponse();
  if (f != null) {
    writer.writeMessage(
      1036,
      f,
      proto.protowire.GetBlockDagInfoResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getResolvefinalityconflictrequest();
  if (f != null) {
    writer.writeMessage(
      1037,
      f,
      proto.protowire.ResolveFinalityConflictRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getResolvefinalityconflictresponse();
  if (f != null) {
    writer.writeMessage(
      1038,
      f,
      proto.protowire.ResolveFinalityConflictResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifyfinalityconflictsrequest();
  if (f != null) {
    writer.writeMessage(
      1039,
      f,
      proto.protowire.NotifyFinalityConflictsRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifyfinalityconflictsresponse();
  if (f != null) {
    writer.writeMessage(
      1040,
      f,
      proto.protowire.NotifyFinalityConflictsResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getFinalityconflictnotification();
  if (f != null) {
    writer.writeMessage(
      1041,
      f,
      proto.protowire.FinalityConflictNotificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getFinalityconflictresolvednotification();
  if (f != null) {
    writer.writeMessage(
      1042,
      f,
      proto.protowire.FinalityConflictResolvedNotificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetmempoolentriesrequest();
  if (f != null) {
    writer.writeMessage(
      1043,
      f,
      proto.protowire.GetMempoolEntriesRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetmempoolentriesresponse();
  if (f != null) {
    writer.writeMessage(
      1044,
      f,
      proto.protowire.GetMempoolEntriesResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getShutdownrequest();
  if (f != null) {
    writer.writeMessage(
      1045,
      f,
      proto.protowire.ShutDownRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getShutdownresponse();
  if (f != null) {
    writer.writeMessage(
      1046,
      f,
      proto.protowire.ShutDownResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetheadersrequest();
  if (f != null) {
    writer.writeMessage(
      1047,
      f,
      proto.protowire.GetHeadersRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getGetheadersresponse();
  if (f != null) {
    writer.writeMessage(
      1048,
      f,
      proto.protowire.GetHeadersResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifytransactionaddedrequest();
  if (f != null) {
    writer.writeMessage(
      1049,
      f,
      proto.protowire.NotifyTransactionAddedRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifytransactionaddedresponse();
  if (f != null) {
    writer.writeMessage(
      1050,
      f,
      proto.protowire.NotifyTransactionAddedResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getTransactionaddednotification();
  if (f != null) {
    writer.writeMessage(
      1051,
      f,
      proto.protowire.TransactionAddedNotificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifyutxoofaddresschangedrequestmessage();
  if (f != null) {
    writer.writeMessage(
      1052,
      f,
      proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getNotifyutxoofaddresschangedresponsemessage();
  if (f != null) {
    writer.writeMessage(
      1053,
      f,
      proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getUtxoofaddresschangednotificationmessage();
  if (f != null) {
    writer.writeMessage(
      1054,
      f,
      proto.protowire.UTXOOfAddressChangedNotificationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressesMessage addresses = 1;
 * @return {?proto.protowire.AddressesMessage}
 */
proto.protowire.KaspadMessage.prototype.getAddresses = function() {
  return /** @type{?proto.protowire.AddressesMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.AddressesMessage, 1));
};


/**
 * @param {?proto.protowire.AddressesMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlockMessage block = 2;
 * @return {?proto.protowire.BlockMessage}
 */
proto.protowire.KaspadMessage.prototype.getBlock = function() {
  return /** @type{?proto.protowire.BlockMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.BlockMessage, 2));
};


/**
 * @param {?proto.protowire.BlockMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransactionMessage transaction = 3;
 * @return {?proto.protowire.TransactionMessage}
 */
proto.protowire.KaspadMessage.prototype.getTransaction = function() {
  return /** @type{?proto.protowire.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionMessage, 3));
};


/**
 * @param {?proto.protowire.TransactionMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setTransaction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RequestBlockLocatorMessage requestBlockLocator = 4;
 * @return {?proto.protowire.RequestBlockLocatorMessage}
 */
proto.protowire.KaspadMessage.prototype.getRequestblocklocator = function() {
  return /** @type{?proto.protowire.RequestBlockLocatorMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RequestBlockLocatorMessage, 4));
};


/**
 * @param {?proto.protowire.RequestBlockLocatorMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setRequestblocklocator = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearRequestblocklocator = function() {
  return this.setRequestblocklocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasRequestblocklocator = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BlockLocatorMessage blockLocator = 5;
 * @return {?proto.protowire.BlockLocatorMessage}
 */
proto.protowire.KaspadMessage.prototype.getBlocklocator = function() {
  return /** @type{?proto.protowire.BlockLocatorMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.BlockLocatorMessage, 5));
};


/**
 * @param {?proto.protowire.BlockLocatorMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setBlocklocator = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearBlocklocator = function() {
  return this.setBlocklocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasBlocklocator = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RequestAddressesMessage requestAddresses = 6;
 * @return {?proto.protowire.RequestAddressesMessage}
 */
proto.protowire.KaspadMessage.prototype.getRequestaddresses = function() {
  return /** @type{?proto.protowire.RequestAddressesMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RequestAddressesMessage, 6));
};


/**
 * @param {?proto.protowire.RequestAddressesMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setRequestaddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearRequestaddresses = function() {
  return this.setRequestaddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasRequestaddresses = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RequestIBDBlocksMessage requestIBDBlocks = 7;
 * @return {?proto.protowire.RequestIBDBlocksMessage}
 */
proto.protowire.KaspadMessage.prototype.getRequestibdblocks = function() {
  return /** @type{?proto.protowire.RequestIBDBlocksMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RequestIBDBlocksMessage, 7));
};


/**
 * @param {?proto.protowire.RequestIBDBlocksMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setRequestibdblocks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearRequestibdblocks = function() {
  return this.setRequestibdblocks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasRequestibdblocks = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RequestNextIBDBlocksMessage requestNextIBDBlocks = 8;
 * @return {?proto.protowire.RequestNextIBDBlocksMessage}
 */
proto.protowire.KaspadMessage.prototype.getRequestnextibdblocks = function() {
  return /** @type{?proto.protowire.RequestNextIBDBlocksMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RequestNextIBDBlocksMessage, 8));
};


/**
 * @param {?proto.protowire.RequestNextIBDBlocksMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setRequestnextibdblocks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearRequestnextibdblocks = function() {
  return this.setRequestnextibdblocks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasRequestnextibdblocks = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DoneIBDBlocksMessage DoneIBDBlocks = 9;
 * @return {?proto.protowire.DoneIBDBlocksMessage}
 */
proto.protowire.KaspadMessage.prototype.getDoneibdblocks = function() {
  return /** @type{?proto.protowire.DoneIBDBlocksMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.DoneIBDBlocksMessage, 9));
};


/**
 * @param {?proto.protowire.DoneIBDBlocksMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setDoneibdblocks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearDoneibdblocks = function() {
  return this.setDoneibdblocks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasDoneibdblocks = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RequestRelayBlocksMessage requestRelayBlocks = 10;
 * @return {?proto.protowire.RequestRelayBlocksMessage}
 */
proto.protowire.KaspadMessage.prototype.getRequestrelayblocks = function() {
  return /** @type{?proto.protowire.RequestRelayBlocksMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RequestRelayBlocksMessage, 10));
};


/**
 * @param {?proto.protowire.RequestRelayBlocksMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setRequestrelayblocks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearRequestrelayblocks = function() {
  return this.setRequestrelayblocks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasRequestrelayblocks = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RequestSelectedTipMessage requestSelectedTip = 11;
 * @return {?proto.protowire.RequestSelectedTipMessage}
 */
proto.protowire.KaspadMessage.prototype.getRequestselectedtip = function() {
  return /** @type{?proto.protowire.RequestSelectedTipMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RequestSelectedTipMessage, 11));
};


/**
 * @param {?proto.protowire.RequestSelectedTipMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setRequestselectedtip = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearRequestselectedtip = function() {
  return this.setRequestselectedtip(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasRequestselectedtip = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional RequestTransactionsMessage requestTransactions = 12;
 * @return {?proto.protowire.RequestTransactionsMessage}
 */
proto.protowire.KaspadMessage.prototype.getRequesttransactions = function() {
  return /** @type{?proto.protowire.RequestTransactionsMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RequestTransactionsMessage, 12));
};


/**
 * @param {?proto.protowire.RequestTransactionsMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setRequesttransactions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearRequesttransactions = function() {
  return this.setRequesttransactions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasRequesttransactions = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional BlockMessage ibdBlock = 13;
 * @return {?proto.protowire.BlockMessage}
 */
proto.protowire.KaspadMessage.prototype.getIbdblock = function() {
  return /** @type{?proto.protowire.BlockMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.BlockMessage, 13));
};


/**
 * @param {?proto.protowire.BlockMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setIbdblock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearIbdblock = function() {
  return this.setIbdblock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasIbdblock = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional InvRelayBlockMessage invRelayBlock = 14;
 * @return {?proto.protowire.InvRelayBlockMessage}
 */
proto.protowire.KaspadMessage.prototype.getInvrelayblock = function() {
  return /** @type{?proto.protowire.InvRelayBlockMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.InvRelayBlockMessage, 14));
};


/**
 * @param {?proto.protowire.InvRelayBlockMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setInvrelayblock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearInvrelayblock = function() {
  return this.setInvrelayblock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasInvrelayblock = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional InvTransactionsMessage invTransactions = 15;
 * @return {?proto.protowire.InvTransactionsMessage}
 */
proto.protowire.KaspadMessage.prototype.getInvtransactions = function() {
  return /** @type{?proto.protowire.InvTransactionsMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.InvTransactionsMessage, 15));
};


/**
 * @param {?proto.protowire.InvTransactionsMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setInvtransactions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearInvtransactions = function() {
  return this.setInvtransactions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasInvtransactions = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PingMessage ping = 16;
 * @return {?proto.protowire.PingMessage}
 */
proto.protowire.KaspadMessage.prototype.getPing = function() {
  return /** @type{?proto.protowire.PingMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.PingMessage, 16));
};


/**
 * @param {?proto.protowire.PingMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasPing = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PongMessage pong = 17;
 * @return {?proto.protowire.PongMessage}
 */
proto.protowire.KaspadMessage.prototype.getPong = function() {
  return /** @type{?proto.protowire.PongMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.PongMessage, 17));
};


/**
 * @param {?proto.protowire.PongMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setPong = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearPong = function() {
  return this.setPong(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasPong = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional SelectedTipMessage selectedTip = 18;
 * @return {?proto.protowire.SelectedTipMessage}
 */
proto.protowire.KaspadMessage.prototype.getSelectedtip = function() {
  return /** @type{?proto.protowire.SelectedTipMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SelectedTipMessage, 18));
};


/**
 * @param {?proto.protowire.SelectedTipMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setSelectedtip = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearSelectedtip = function() {
  return this.setSelectedtip(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasSelectedtip = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional VerackMessage verack = 19;
 * @return {?proto.protowire.VerackMessage}
 */
proto.protowire.KaspadMessage.prototype.getVerack = function() {
  return /** @type{?proto.protowire.VerackMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.VerackMessage, 19));
};


/**
 * @param {?proto.protowire.VerackMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setVerack = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearVerack = function() {
  return this.setVerack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasVerack = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional VersionMessage version = 20;
 * @return {?proto.protowire.VersionMessage}
 */
proto.protowire.KaspadMessage.prototype.getVersion = function() {
  return /** @type{?proto.protowire.VersionMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.VersionMessage, 20));
};


/**
 * @param {?proto.protowire.VersionMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setVersion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional TransactionNotFoundMessage transactionNotFound = 21;
 * @return {?proto.protowire.TransactionNotFoundMessage}
 */
proto.protowire.KaspadMessage.prototype.getTransactionnotfound = function() {
  return /** @type{?proto.protowire.TransactionNotFoundMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionNotFoundMessage, 21));
};


/**
 * @param {?proto.protowire.TransactionNotFoundMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setTransactionnotfound = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearTransactionnotfound = function() {
  return this.setTransactionnotfound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasTransactionnotfound = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional RejectMessage reject = 22;
 * @return {?proto.protowire.RejectMessage}
 */
proto.protowire.KaspadMessage.prototype.getReject = function() {
  return /** @type{?proto.protowire.RejectMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RejectMessage, 22));
};


/**
 * @param {?proto.protowire.RejectMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setReject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearReject = function() {
  return this.setReject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasReject = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional GetCurrentNetworkRequestMessage getCurrentNetworkRequest = 1001;
 * @return {?proto.protowire.GetCurrentNetworkRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetcurrentnetworkrequest = function() {
  return /** @type{?proto.protowire.GetCurrentNetworkRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetCurrentNetworkRequestMessage, 1001));
};


/**
 * @param {?proto.protowire.GetCurrentNetworkRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetcurrentnetworkrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1001, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetcurrentnetworkrequest = function() {
  return this.setGetcurrentnetworkrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetcurrentnetworkrequest = function() {
  return jspb.Message.getField(this, 1001) != null;
};


/**
 * optional GetCurrentNetworkResponseMessage getCurrentNetworkResponse = 1002;
 * @return {?proto.protowire.GetCurrentNetworkResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetcurrentnetworkresponse = function() {
  return /** @type{?proto.protowire.GetCurrentNetworkResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetCurrentNetworkResponseMessage, 1002));
};


/**
 * @param {?proto.protowire.GetCurrentNetworkResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetcurrentnetworkresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1002, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetcurrentnetworkresponse = function() {
  return this.setGetcurrentnetworkresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetcurrentnetworkresponse = function() {
  return jspb.Message.getField(this, 1002) != null;
};


/**
 * optional SubmitBlockRequestMessage submitBlockRequest = 1003;
 * @return {?proto.protowire.SubmitBlockRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getSubmitblockrequest = function() {
  return /** @type{?proto.protowire.SubmitBlockRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubmitBlockRequestMessage, 1003));
};


/**
 * @param {?proto.protowire.SubmitBlockRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setSubmitblockrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1003, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearSubmitblockrequest = function() {
  return this.setSubmitblockrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasSubmitblockrequest = function() {
  return jspb.Message.getField(this, 1003) != null;
};


/**
 * optional SubmitBlockResponseMessage submitBlockResponse = 1004;
 * @return {?proto.protowire.SubmitBlockResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getSubmitblockresponse = function() {
  return /** @type{?proto.protowire.SubmitBlockResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubmitBlockResponseMessage, 1004));
};


/**
 * @param {?proto.protowire.SubmitBlockResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setSubmitblockresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1004, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearSubmitblockresponse = function() {
  return this.setSubmitblockresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasSubmitblockresponse = function() {
  return jspb.Message.getField(this, 1004) != null;
};


/**
 * optional GetBlockTemplateRequestMessage getBlockTemplateRequest = 1005;
 * @return {?proto.protowire.GetBlockTemplateRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblocktemplaterequest = function() {
  return /** @type{?proto.protowire.GetBlockTemplateRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockTemplateRequestMessage, 1005));
};


/**
 * @param {?proto.protowire.GetBlockTemplateRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblocktemplaterequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1005, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblocktemplaterequest = function() {
  return this.setGetblocktemplaterequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblocktemplaterequest = function() {
  return jspb.Message.getField(this, 1005) != null;
};


/**
 * optional GetBlockTemplateResponseMessage getBlockTemplateResponse = 1006;
 * @return {?proto.protowire.GetBlockTemplateResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblocktemplateresponse = function() {
  return /** @type{?proto.protowire.GetBlockTemplateResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockTemplateResponseMessage, 1006));
};


/**
 * @param {?proto.protowire.GetBlockTemplateResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblocktemplateresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1006, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblocktemplateresponse = function() {
  return this.setGetblocktemplateresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblocktemplateresponse = function() {
  return jspb.Message.getField(this, 1006) != null;
};


/**
 * optional NotifyBlockAddedRequestMessage notifyBlockAddedRequest = 1007;
 * @return {?proto.protowire.NotifyBlockAddedRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifyblockaddedrequest = function() {
  return /** @type{?proto.protowire.NotifyBlockAddedRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyBlockAddedRequestMessage, 1007));
};


/**
 * @param {?proto.protowire.NotifyBlockAddedRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifyblockaddedrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1007, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifyblockaddedrequest = function() {
  return this.setNotifyblockaddedrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifyblockaddedrequest = function() {
  return jspb.Message.getField(this, 1007) != null;
};


/**
 * optional NotifyBlockAddedResponseMessage notifyBlockAddedResponse = 1008;
 * @return {?proto.protowire.NotifyBlockAddedResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifyblockaddedresponse = function() {
  return /** @type{?proto.protowire.NotifyBlockAddedResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyBlockAddedResponseMessage, 1008));
};


/**
 * @param {?proto.protowire.NotifyBlockAddedResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifyblockaddedresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1008, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifyblockaddedresponse = function() {
  return this.setNotifyblockaddedresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifyblockaddedresponse = function() {
  return jspb.Message.getField(this, 1008) != null;
};


/**
 * optional BlockAddedNotificationMessage blockAddedNotification = 1009;
 * @return {?proto.protowire.BlockAddedNotificationMessage}
 */
proto.protowire.KaspadMessage.prototype.getBlockaddednotification = function() {
  return /** @type{?proto.protowire.BlockAddedNotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.BlockAddedNotificationMessage, 1009));
};


/**
 * @param {?proto.protowire.BlockAddedNotificationMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setBlockaddednotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1009, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearBlockaddednotification = function() {
  return this.setBlockaddednotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasBlockaddednotification = function() {
  return jspb.Message.getField(this, 1009) != null;
};


/**
 * optional GetPeerAddressesRequestMessage getPeerAddressesRequest = 1010;
 * @return {?proto.protowire.GetPeerAddressesRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetpeeraddressesrequest = function() {
  return /** @type{?proto.protowire.GetPeerAddressesRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetPeerAddressesRequestMessage, 1010));
};


/**
 * @param {?proto.protowire.GetPeerAddressesRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetpeeraddressesrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1010, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetpeeraddressesrequest = function() {
  return this.setGetpeeraddressesrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetpeeraddressesrequest = function() {
  return jspb.Message.getField(this, 1010) != null;
};


/**
 * optional GetPeerAddressesResponseMessage getPeerAddressesResponse = 1011;
 * @return {?proto.protowire.GetPeerAddressesResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetpeeraddressesresponse = function() {
  return /** @type{?proto.protowire.GetPeerAddressesResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetPeerAddressesResponseMessage, 1011));
};


/**
 * @param {?proto.protowire.GetPeerAddressesResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetpeeraddressesresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1011, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetpeeraddressesresponse = function() {
  return this.setGetpeeraddressesresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetpeeraddressesresponse = function() {
  return jspb.Message.getField(this, 1011) != null;
};


/**
 * optional GetSelectedTipHashRequestMessage getSelectedTipHashRequest = 1012;
 * @return {?proto.protowire.GetSelectedTipHashRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetselectedtiphashrequest = function() {
  return /** @type{?proto.protowire.GetSelectedTipHashRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetSelectedTipHashRequestMessage, 1012));
};


/**
 * @param {?proto.protowire.GetSelectedTipHashRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetselectedtiphashrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1012, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetselectedtiphashrequest = function() {
  return this.setGetselectedtiphashrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetselectedtiphashrequest = function() {
  return jspb.Message.getField(this, 1012) != null;
};


/**
 * optional GetSelectedTipHashResponseMessage getSelectedTipHashResponse = 1013;
 * @return {?proto.protowire.GetSelectedTipHashResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetselectedtiphashresponse = function() {
  return /** @type{?proto.protowire.GetSelectedTipHashResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetSelectedTipHashResponseMessage, 1013));
};


/**
 * @param {?proto.protowire.GetSelectedTipHashResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetselectedtiphashresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1013, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetselectedtiphashresponse = function() {
  return this.setGetselectedtiphashresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetselectedtiphashresponse = function() {
  return jspb.Message.getField(this, 1013) != null;
};


/**
 * optional GetMempoolEntryRequestMessage getMempoolEntryRequest = 1014;
 * @return {?proto.protowire.GetMempoolEntryRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetmempoolentryrequest = function() {
  return /** @type{?proto.protowire.GetMempoolEntryRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetMempoolEntryRequestMessage, 1014));
};


/**
 * @param {?proto.protowire.GetMempoolEntryRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetmempoolentryrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1014, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetmempoolentryrequest = function() {
  return this.setGetmempoolentryrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetmempoolentryrequest = function() {
  return jspb.Message.getField(this, 1014) != null;
};


/**
 * optional GetMempoolEntryResponseMessage getMempoolEntryResponse = 1015;
 * @return {?proto.protowire.GetMempoolEntryResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetmempoolentryresponse = function() {
  return /** @type{?proto.protowire.GetMempoolEntryResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetMempoolEntryResponseMessage, 1015));
};


/**
 * @param {?proto.protowire.GetMempoolEntryResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetmempoolentryresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1015, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetmempoolentryresponse = function() {
  return this.setGetmempoolentryresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetmempoolentryresponse = function() {
  return jspb.Message.getField(this, 1015) != null;
};


/**
 * optional GetConnectedPeerInfoRequestMessage getConnectedPeerInfoRequest = 1016;
 * @return {?proto.protowire.GetConnectedPeerInfoRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetconnectedpeerinforequest = function() {
  return /** @type{?proto.protowire.GetConnectedPeerInfoRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetConnectedPeerInfoRequestMessage, 1016));
};


/**
 * @param {?proto.protowire.GetConnectedPeerInfoRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetconnectedpeerinforequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1016, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetconnectedpeerinforequest = function() {
  return this.setGetconnectedpeerinforequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetconnectedpeerinforequest = function() {
  return jspb.Message.getField(this, 1016) != null;
};


/**
 * optional GetConnectedPeerInfoResponseMessage getConnectedPeerInfoResponse = 1017;
 * @return {?proto.protowire.GetConnectedPeerInfoResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetconnectedpeerinforesponse = function() {
  return /** @type{?proto.protowire.GetConnectedPeerInfoResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetConnectedPeerInfoResponseMessage, 1017));
};


/**
 * @param {?proto.protowire.GetConnectedPeerInfoResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetconnectedpeerinforesponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1017, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetconnectedpeerinforesponse = function() {
  return this.setGetconnectedpeerinforesponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetconnectedpeerinforesponse = function() {
  return jspb.Message.getField(this, 1017) != null;
};


/**
 * optional AddPeerRequestMessage addPeerRequest = 1018;
 * @return {?proto.protowire.AddPeerRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getAddpeerrequest = function() {
  return /** @type{?proto.protowire.AddPeerRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.AddPeerRequestMessage, 1018));
};


/**
 * @param {?proto.protowire.AddPeerRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setAddpeerrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1018, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearAddpeerrequest = function() {
  return this.setAddpeerrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasAddpeerrequest = function() {
  return jspb.Message.getField(this, 1018) != null;
};


/**
 * optional AddPeerResponseMessage addPeerResponse = 1019;
 * @return {?proto.protowire.AddPeerResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getAddpeerresponse = function() {
  return /** @type{?proto.protowire.AddPeerResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.AddPeerResponseMessage, 1019));
};


/**
 * @param {?proto.protowire.AddPeerResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setAddpeerresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1019, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearAddpeerresponse = function() {
  return this.setAddpeerresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasAddpeerresponse = function() {
  return jspb.Message.getField(this, 1019) != null;
};


/**
 * optional SubmitTransactionRequestMessage submitTransactionRequest = 1020;
 * @return {?proto.protowire.SubmitTransactionRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getSubmittransactionrequest = function() {
  return /** @type{?proto.protowire.SubmitTransactionRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubmitTransactionRequestMessage, 1020));
};


/**
 * @param {?proto.protowire.SubmitTransactionRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setSubmittransactionrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1020, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearSubmittransactionrequest = function() {
  return this.setSubmittransactionrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasSubmittransactionrequest = function() {
  return jspb.Message.getField(this, 1020) != null;
};


/**
 * optional SubmitTransactionResponseMessage submitTransactionResponse = 1021;
 * @return {?proto.protowire.SubmitTransactionResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getSubmittransactionresponse = function() {
  return /** @type{?proto.protowire.SubmitTransactionResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubmitTransactionResponseMessage, 1021));
};


/**
 * @param {?proto.protowire.SubmitTransactionResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setSubmittransactionresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1021, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearSubmittransactionresponse = function() {
  return this.setSubmittransactionresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasSubmittransactionresponse = function() {
  return jspb.Message.getField(this, 1021) != null;
};


/**
 * optional NotifyChainChangedRequestMessage notifyChainChangedRequest = 1022;
 * @return {?proto.protowire.NotifyChainChangedRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifychainchangedrequest = function() {
  return /** @type{?proto.protowire.NotifyChainChangedRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyChainChangedRequestMessage, 1022));
};


/**
 * @param {?proto.protowire.NotifyChainChangedRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifychainchangedrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1022, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifychainchangedrequest = function() {
  return this.setNotifychainchangedrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifychainchangedrequest = function() {
  return jspb.Message.getField(this, 1022) != null;
};


/**
 * optional NotifyChainChangedResponseMessage notifyChainChangedResponse = 1023;
 * @return {?proto.protowire.NotifyChainChangedResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifychainchangedresponse = function() {
  return /** @type{?proto.protowire.NotifyChainChangedResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyChainChangedResponseMessage, 1023));
};


/**
 * @param {?proto.protowire.NotifyChainChangedResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifychainchangedresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1023, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifychainchangedresponse = function() {
  return this.setNotifychainchangedresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifychainchangedresponse = function() {
  return jspb.Message.getField(this, 1023) != null;
};


/**
 * optional ChainChangedNotificationMessage chainChangedNotification = 1024;
 * @return {?proto.protowire.ChainChangedNotificationMessage}
 */
proto.protowire.KaspadMessage.prototype.getChainchangednotification = function() {
  return /** @type{?proto.protowire.ChainChangedNotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.ChainChangedNotificationMessage, 1024));
};


/**
 * @param {?proto.protowire.ChainChangedNotificationMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setChainchangednotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1024, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearChainchangednotification = function() {
  return this.setChainchangednotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasChainchangednotification = function() {
  return jspb.Message.getField(this, 1024) != null;
};


/**
 * optional GetBlockRequestMessage getBlockRequest = 1025;
 * @return {?proto.protowire.GetBlockRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblockrequest = function() {
  return /** @type{?proto.protowire.GetBlockRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockRequestMessage, 1025));
};


/**
 * @param {?proto.protowire.GetBlockRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblockrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1025, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblockrequest = function() {
  return this.setGetblockrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblockrequest = function() {
  return jspb.Message.getField(this, 1025) != null;
};


/**
 * optional GetBlockResponseMessage getBlockResponse = 1026;
 * @return {?proto.protowire.GetBlockResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblockresponse = function() {
  return /** @type{?proto.protowire.GetBlockResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockResponseMessage, 1026));
};


/**
 * @param {?proto.protowire.GetBlockResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblockresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1026, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblockresponse = function() {
  return this.setGetblockresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblockresponse = function() {
  return jspb.Message.getField(this, 1026) != null;
};


/**
 * optional GetSubnetworkRequestMessage getSubnetworkRequest = 1027;
 * @return {?proto.protowire.GetSubnetworkRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetsubnetworkrequest = function() {
  return /** @type{?proto.protowire.GetSubnetworkRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetSubnetworkRequestMessage, 1027));
};


/**
 * @param {?proto.protowire.GetSubnetworkRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetsubnetworkrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1027, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetsubnetworkrequest = function() {
  return this.setGetsubnetworkrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetsubnetworkrequest = function() {
  return jspb.Message.getField(this, 1027) != null;
};


/**
 * optional GetSubnetworkResponseMessage getSubnetworkResponse = 1028;
 * @return {?proto.protowire.GetSubnetworkResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetsubnetworkresponse = function() {
  return /** @type{?proto.protowire.GetSubnetworkResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetSubnetworkResponseMessage, 1028));
};


/**
 * @param {?proto.protowire.GetSubnetworkResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetsubnetworkresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1028, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetsubnetworkresponse = function() {
  return this.setGetsubnetworkresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetsubnetworkresponse = function() {
  return jspb.Message.getField(this, 1028) != null;
};


/**
 * optional GetChainFromBlockRequestMessage getChainFromBlockRequest = 1029;
 * @return {?proto.protowire.GetChainFromBlockRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetchainfromblockrequest = function() {
  return /** @type{?proto.protowire.GetChainFromBlockRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetChainFromBlockRequestMessage, 1029));
};


/**
 * @param {?proto.protowire.GetChainFromBlockRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetchainfromblockrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1029, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetchainfromblockrequest = function() {
  return this.setGetchainfromblockrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetchainfromblockrequest = function() {
  return jspb.Message.getField(this, 1029) != null;
};


/**
 * optional GetChainFromBlockResponseMessage getChainFromBlockResponse = 1030;
 * @return {?proto.protowire.GetChainFromBlockResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetchainfromblockresponse = function() {
  return /** @type{?proto.protowire.GetChainFromBlockResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetChainFromBlockResponseMessage, 1030));
};


/**
 * @param {?proto.protowire.GetChainFromBlockResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetchainfromblockresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1030, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetchainfromblockresponse = function() {
  return this.setGetchainfromblockresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetchainfromblockresponse = function() {
  return jspb.Message.getField(this, 1030) != null;
};


/**
 * optional GetBlocksRequestMessage getBlocksRequest = 1031;
 * @return {?proto.protowire.GetBlocksRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblocksrequest = function() {
  return /** @type{?proto.protowire.GetBlocksRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlocksRequestMessage, 1031));
};


/**
 * @param {?proto.protowire.GetBlocksRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblocksrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1031, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblocksrequest = function() {
  return this.setGetblocksrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblocksrequest = function() {
  return jspb.Message.getField(this, 1031) != null;
};


/**
 * optional GetBlocksResponseMessage getBlocksResponse = 1032;
 * @return {?proto.protowire.GetBlocksResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblocksresponse = function() {
  return /** @type{?proto.protowire.GetBlocksResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlocksResponseMessage, 1032));
};


/**
 * @param {?proto.protowire.GetBlocksResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblocksresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1032, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblocksresponse = function() {
  return this.setGetblocksresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblocksresponse = function() {
  return jspb.Message.getField(this, 1032) != null;
};


/**
 * optional GetBlockCountRequestMessage getBlockCountRequest = 1033;
 * @return {?proto.protowire.GetBlockCountRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblockcountrequest = function() {
  return /** @type{?proto.protowire.GetBlockCountRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockCountRequestMessage, 1033));
};


/**
 * @param {?proto.protowire.GetBlockCountRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblockcountrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1033, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblockcountrequest = function() {
  return this.setGetblockcountrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblockcountrequest = function() {
  return jspb.Message.getField(this, 1033) != null;
};


/**
 * optional GetBlockCountResponseMessage getBlockCountResponse = 1034;
 * @return {?proto.protowire.GetBlockCountResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblockcountresponse = function() {
  return /** @type{?proto.protowire.GetBlockCountResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockCountResponseMessage, 1034));
};


/**
 * @param {?proto.protowire.GetBlockCountResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblockcountresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1034, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblockcountresponse = function() {
  return this.setGetblockcountresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblockcountresponse = function() {
  return jspb.Message.getField(this, 1034) != null;
};


/**
 * optional GetBlockDagInfoRequestMessage getBlockDagInfoRequest = 1035;
 * @return {?proto.protowire.GetBlockDagInfoRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblockdaginforequest = function() {
  return /** @type{?proto.protowire.GetBlockDagInfoRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockDagInfoRequestMessage, 1035));
};


/**
 * @param {?proto.protowire.GetBlockDagInfoRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblockdaginforequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1035, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblockdaginforequest = function() {
  return this.setGetblockdaginforequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblockdaginforequest = function() {
  return jspb.Message.getField(this, 1035) != null;
};


/**
 * optional GetBlockDagInfoResponseMessage getBlockDagInfoResponse = 1036;
 * @return {?proto.protowire.GetBlockDagInfoResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetblockdaginforesponse = function() {
  return /** @type{?proto.protowire.GetBlockDagInfoResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetBlockDagInfoResponseMessage, 1036));
};


/**
 * @param {?proto.protowire.GetBlockDagInfoResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetblockdaginforesponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1036, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetblockdaginforesponse = function() {
  return this.setGetblockdaginforesponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetblockdaginforesponse = function() {
  return jspb.Message.getField(this, 1036) != null;
};


/**
 * optional ResolveFinalityConflictRequestMessage resolveFinalityConflictRequest = 1037;
 * @return {?proto.protowire.ResolveFinalityConflictRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getResolvefinalityconflictrequest = function() {
  return /** @type{?proto.protowire.ResolveFinalityConflictRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.ResolveFinalityConflictRequestMessage, 1037));
};


/**
 * @param {?proto.protowire.ResolveFinalityConflictRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setResolvefinalityconflictrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1037, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearResolvefinalityconflictrequest = function() {
  return this.setResolvefinalityconflictrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasResolvefinalityconflictrequest = function() {
  return jspb.Message.getField(this, 1037) != null;
};


/**
 * optional ResolveFinalityConflictResponseMessage resolveFinalityConflictResponse = 1038;
 * @return {?proto.protowire.ResolveFinalityConflictResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getResolvefinalityconflictresponse = function() {
  return /** @type{?proto.protowire.ResolveFinalityConflictResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.ResolveFinalityConflictResponseMessage, 1038));
};


/**
 * @param {?proto.protowire.ResolveFinalityConflictResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setResolvefinalityconflictresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1038, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearResolvefinalityconflictresponse = function() {
  return this.setResolvefinalityconflictresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasResolvefinalityconflictresponse = function() {
  return jspb.Message.getField(this, 1038) != null;
};


/**
 * optional NotifyFinalityConflictsRequestMessage notifyFinalityConflictsRequest = 1039;
 * @return {?proto.protowire.NotifyFinalityConflictsRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifyfinalityconflictsrequest = function() {
  return /** @type{?proto.protowire.NotifyFinalityConflictsRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyFinalityConflictsRequestMessage, 1039));
};


/**
 * @param {?proto.protowire.NotifyFinalityConflictsRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifyfinalityconflictsrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1039, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifyfinalityconflictsrequest = function() {
  return this.setNotifyfinalityconflictsrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifyfinalityconflictsrequest = function() {
  return jspb.Message.getField(this, 1039) != null;
};


/**
 * optional NotifyFinalityConflictsResponseMessage notifyFinalityConflictsResponse = 1040;
 * @return {?proto.protowire.NotifyFinalityConflictsResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifyfinalityconflictsresponse = function() {
  return /** @type{?proto.protowire.NotifyFinalityConflictsResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyFinalityConflictsResponseMessage, 1040));
};


/**
 * @param {?proto.protowire.NotifyFinalityConflictsResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifyfinalityconflictsresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1040, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifyfinalityconflictsresponse = function() {
  return this.setNotifyfinalityconflictsresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifyfinalityconflictsresponse = function() {
  return jspb.Message.getField(this, 1040) != null;
};


/**
 * optional FinalityConflictNotificationMessage finalityConflictNotification = 1041;
 * @return {?proto.protowire.FinalityConflictNotificationMessage}
 */
proto.protowire.KaspadMessage.prototype.getFinalityconflictnotification = function() {
  return /** @type{?proto.protowire.FinalityConflictNotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.FinalityConflictNotificationMessage, 1041));
};


/**
 * @param {?proto.protowire.FinalityConflictNotificationMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setFinalityconflictnotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1041, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearFinalityconflictnotification = function() {
  return this.setFinalityconflictnotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasFinalityconflictnotification = function() {
  return jspb.Message.getField(this, 1041) != null;
};


/**
 * optional FinalityConflictResolvedNotificationMessage finalityConflictResolvedNotification = 1042;
 * @return {?proto.protowire.FinalityConflictResolvedNotificationMessage}
 */
proto.protowire.KaspadMessage.prototype.getFinalityconflictresolvednotification = function() {
  return /** @type{?proto.protowire.FinalityConflictResolvedNotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.FinalityConflictResolvedNotificationMessage, 1042));
};


/**
 * @param {?proto.protowire.FinalityConflictResolvedNotificationMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setFinalityconflictresolvednotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1042, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearFinalityconflictresolvednotification = function() {
  return this.setFinalityconflictresolvednotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasFinalityconflictresolvednotification = function() {
  return jspb.Message.getField(this, 1042) != null;
};


/**
 * optional GetMempoolEntriesRequestMessage getMempoolEntriesRequest = 1043;
 * @return {?proto.protowire.GetMempoolEntriesRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetmempoolentriesrequest = function() {
  return /** @type{?proto.protowire.GetMempoolEntriesRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetMempoolEntriesRequestMessage, 1043));
};


/**
 * @param {?proto.protowire.GetMempoolEntriesRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetmempoolentriesrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1043, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetmempoolentriesrequest = function() {
  return this.setGetmempoolentriesrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetmempoolentriesrequest = function() {
  return jspb.Message.getField(this, 1043) != null;
};


/**
 * optional GetMempoolEntriesResponseMessage getMempoolEntriesResponse = 1044;
 * @return {?proto.protowire.GetMempoolEntriesResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetmempoolentriesresponse = function() {
  return /** @type{?proto.protowire.GetMempoolEntriesResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetMempoolEntriesResponseMessage, 1044));
};


/**
 * @param {?proto.protowire.GetMempoolEntriesResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetmempoolentriesresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1044, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetmempoolentriesresponse = function() {
  return this.setGetmempoolentriesresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetmempoolentriesresponse = function() {
  return jspb.Message.getField(this, 1044) != null;
};


/**
 * optional ShutDownRequestMessage shutDownRequest = 1045;
 * @return {?proto.protowire.ShutDownRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getShutdownrequest = function() {
  return /** @type{?proto.protowire.ShutDownRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.ShutDownRequestMessage, 1045));
};


/**
 * @param {?proto.protowire.ShutDownRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setShutdownrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1045, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearShutdownrequest = function() {
  return this.setShutdownrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasShutdownrequest = function() {
  return jspb.Message.getField(this, 1045) != null;
};


/**
 * optional ShutDownResponseMessage shutDownResponse = 1046;
 * @return {?proto.protowire.ShutDownResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getShutdownresponse = function() {
  return /** @type{?proto.protowire.ShutDownResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.ShutDownResponseMessage, 1046));
};


/**
 * @param {?proto.protowire.ShutDownResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setShutdownresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1046, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearShutdownresponse = function() {
  return this.setShutdownresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasShutdownresponse = function() {
  return jspb.Message.getField(this, 1046) != null;
};


/**
 * optional GetHeadersRequestMessage getHeadersRequest = 1047;
 * @return {?proto.protowire.GetHeadersRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetheadersrequest = function() {
  return /** @type{?proto.protowire.GetHeadersRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetHeadersRequestMessage, 1047));
};


/**
 * @param {?proto.protowire.GetHeadersRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetheadersrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1047, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetheadersrequest = function() {
  return this.setGetheadersrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetheadersrequest = function() {
  return jspb.Message.getField(this, 1047) != null;
};


/**
 * optional GetHeadersResponseMessage getHeadersResponse = 1048;
 * @return {?proto.protowire.GetHeadersResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getGetheadersresponse = function() {
  return /** @type{?proto.protowire.GetHeadersResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.GetHeadersResponseMessage, 1048));
};


/**
 * @param {?proto.protowire.GetHeadersResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setGetheadersresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1048, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearGetheadersresponse = function() {
  return this.setGetheadersresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasGetheadersresponse = function() {
  return jspb.Message.getField(this, 1048) != null;
};


/**
 * optional NotifyTransactionAddedRequestMessage notifyTransactionAddedRequest = 1049;
 * @return {?proto.protowire.NotifyTransactionAddedRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifytransactionaddedrequest = function() {
  return /** @type{?proto.protowire.NotifyTransactionAddedRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyTransactionAddedRequestMessage, 1049));
};


/**
 * @param {?proto.protowire.NotifyTransactionAddedRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifytransactionaddedrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1049, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifytransactionaddedrequest = function() {
  return this.setNotifytransactionaddedrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifytransactionaddedrequest = function() {
  return jspb.Message.getField(this, 1049) != null;
};


/**
 * optional NotifyTransactionAddedResponseMessage notifyTransactionAddedResponse = 1050;
 * @return {?proto.protowire.NotifyTransactionAddedResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifytransactionaddedresponse = function() {
  return /** @type{?proto.protowire.NotifyTransactionAddedResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyTransactionAddedResponseMessage, 1050));
};


/**
 * @param {?proto.protowire.NotifyTransactionAddedResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifytransactionaddedresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1050, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifytransactionaddedresponse = function() {
  return this.setNotifytransactionaddedresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifytransactionaddedresponse = function() {
  return jspb.Message.getField(this, 1050) != null;
};


/**
 * optional TransactionAddedNotificationMessage transactionAddedNotification = 1051;
 * @return {?proto.protowire.TransactionAddedNotificationMessage}
 */
proto.protowire.KaspadMessage.prototype.getTransactionaddednotification = function() {
  return /** @type{?proto.protowire.TransactionAddedNotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionAddedNotificationMessage, 1051));
};


/**
 * @param {?proto.protowire.TransactionAddedNotificationMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setTransactionaddednotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1051, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearTransactionaddednotification = function() {
  return this.setTransactionaddednotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasTransactionaddednotification = function() {
  return jspb.Message.getField(this, 1051) != null;
};


/**
 * optional NotifyUTXOOfAddressChangedRequestMessage notifyUTXOOfAddressChangedRequestMessage = 1052;
 * @return {?proto.protowire.NotifyUTXOOfAddressChangedRequestMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifyutxoofaddresschangedrequestmessage = function() {
  return /** @type{?proto.protowire.NotifyUTXOOfAddressChangedRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyUTXOOfAddressChangedRequestMessage, 1052));
};


/**
 * @param {?proto.protowire.NotifyUTXOOfAddressChangedRequestMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifyutxoofaddresschangedrequestmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1052, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifyutxoofaddresschangedrequestmessage = function() {
  return this.setNotifyutxoofaddresschangedrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifyutxoofaddresschangedrequestmessage = function() {
  return jspb.Message.getField(this, 1052) != null;
};


/**
 * optional NotifyUTXOOfAddressChangedResponseMessage notifyUTXOOfAddressChangedResponseMessage = 1053;
 * @return {?proto.protowire.NotifyUTXOOfAddressChangedResponseMessage}
 */
proto.protowire.KaspadMessage.prototype.getNotifyutxoofaddresschangedresponsemessage = function() {
  return /** @type{?proto.protowire.NotifyUTXOOfAddressChangedResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NotifyUTXOOfAddressChangedResponseMessage, 1053));
};


/**
 * @param {?proto.protowire.NotifyUTXOOfAddressChangedResponseMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setNotifyutxoofaddresschangedresponsemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1053, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearNotifyutxoofaddresschangedresponsemessage = function() {
  return this.setNotifyutxoofaddresschangedresponsemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasNotifyutxoofaddresschangedresponsemessage = function() {
  return jspb.Message.getField(this, 1053) != null;
};


/**
 * optional UTXOOfAddressChangedNotificationMessage utxoOfAddressChangedNotificationMessage = 1054;
 * @return {?proto.protowire.UTXOOfAddressChangedNotificationMessage}
 */
proto.protowire.KaspadMessage.prototype.getUtxoofaddresschangednotificationmessage = function() {
  return /** @type{?proto.protowire.UTXOOfAddressChangedNotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.UTXOOfAddressChangedNotificationMessage, 1054));
};


/**
 * @param {?proto.protowire.UTXOOfAddressChangedNotificationMessage|undefined} value
 * @return {!proto.protowire.KaspadMessage} returns this
*/
proto.protowire.KaspadMessage.prototype.setUtxoofaddresschangednotificationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1054, proto.protowire.KaspadMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.KaspadMessage} returns this
 */
proto.protowire.KaspadMessage.prototype.clearUtxoofaddresschangednotificationmessage = function() {
  return this.setUtxoofaddresschangednotificationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.KaspadMessage.prototype.hasUtxoofaddresschangednotificationmessage = function() {
  return jspb.Message.getField(this, 1054) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.AddressesMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.AddressesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.AddressesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.AddressesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AddressesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeallsubnetworks: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    subnetworkid: (f = msg.getSubnetworkid()) && proto.protowire.SubnetworkID.toObject(includeInstance, f),
    addresslistList: jspb.Message.toObjectList(msg.getAddresslistList(),
    proto.protowire.NetAddress.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.AddressesMessage}
 */
proto.protowire.AddressesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.AddressesMessage;
  return proto.protowire.AddressesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.AddressesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.AddressesMessage}
 */
proto.protowire.AddressesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeallsubnetworks(value);
      break;
    case 2:
      var value = new proto.protowire.SubnetworkID;
      reader.readMessage(value,proto.protowire.SubnetworkID.deserializeBinaryFromReader);
      msg.setSubnetworkid(value);
      break;
    case 3:
      var value = new proto.protowire.NetAddress;
      reader.readMessage(value,proto.protowire.NetAddress.deserializeBinaryFromReader);
      msg.addAddresslist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.AddressesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.AddressesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.AddressesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AddressesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeallsubnetworks();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSubnetworkid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protowire.SubnetworkID.serializeBinaryToWriter
    );
  }
  f = message.getAddresslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protowire.NetAddress.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool includeAllSubnetworks = 1;
 * @return {boolean}
 */
proto.protowire.AddressesMessage.prototype.getIncludeallsubnetworks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.AddressesMessage} returns this
 */
proto.protowire.AddressesMessage.prototype.setIncludeallsubnetworks = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional SubnetworkID subnetworkID = 2;
 * @return {?proto.protowire.SubnetworkID}
 */
proto.protowire.AddressesMessage.prototype.getSubnetworkid = function() {
  return /** @type{?proto.protowire.SubnetworkID} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubnetworkID, 2));
};


/**
 * @param {?proto.protowire.SubnetworkID|undefined} value
 * @return {!proto.protowire.AddressesMessage} returns this
*/
proto.protowire.AddressesMessage.prototype.setSubnetworkid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.AddressesMessage} returns this
 */
proto.protowire.AddressesMessage.prototype.clearSubnetworkid = function() {
  return this.setSubnetworkid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.AddressesMessage.prototype.hasSubnetworkid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NetAddress addressList = 3;
 * @return {!Array<!proto.protowire.NetAddress>}
 */
proto.protowire.AddressesMessage.prototype.getAddresslistList = function() {
  return /** @type{!Array<!proto.protowire.NetAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.NetAddress, 3));
};


/**
 * @param {!Array<!proto.protowire.NetAddress>} value
 * @return {!proto.protowire.AddressesMessage} returns this
*/
proto.protowire.AddressesMessage.prototype.setAddresslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protowire.NetAddress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.NetAddress}
 */
proto.protowire.AddressesMessage.prototype.addAddresslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protowire.NetAddress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.AddressesMessage} returns this
 */
proto.protowire.AddressesMessage.prototype.clearAddresslistList = function() {
  return this.setAddresslistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NetAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NetAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NetAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NetAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    services: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ip: msg.getIp_asB64(),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NetAddress}
 */
proto.protowire.NetAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NetAddress;
  return proto.protowire.NetAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NetAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NetAddress}
 */
proto.protowire.NetAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setServices(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NetAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NetAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NetAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NetAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getServices();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIp_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.protowire.NetAddress.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.NetAddress} returns this
 */
proto.protowire.NetAddress.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 services = 2;
 * @return {number}
 */
proto.protowire.NetAddress.prototype.getServices = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.NetAddress} returns this
 */
proto.protowire.NetAddress.prototype.setServices = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes ip = 3;
 * @return {string}
 */
proto.protowire.NetAddress.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes ip = 3;
 * This is a type-conversion wrapper around `getIp()`
 * @return {string}
 */
proto.protowire.NetAddress.prototype.getIp_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIp()));
};


/**
 * optional bytes ip = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIp()`
 * @return {!Uint8Array}
 */
proto.protowire.NetAddress.prototype.getIp_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIp()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.NetAddress} returns this
 */
proto.protowire.NetAddress.prototype.setIp = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint32 port = 4;
 * @return {number}
 */
proto.protowire.NetAddress.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.NetAddress} returns this
 */
proto.protowire.NetAddress.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.SubnetworkID.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.SubnetworkID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.SubnetworkID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubnetworkID.toObject = function(includeInstance, msg) {
  var f, obj = {
    bytes: msg.getBytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.SubnetworkID}
 */
proto.protowire.SubnetworkID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.SubnetworkID;
  return proto.protowire.SubnetworkID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.SubnetworkID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.SubnetworkID}
 */
proto.protowire.SubnetworkID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.SubnetworkID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.SubnetworkID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.SubnetworkID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubnetworkID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes bytes = 1;
 * @return {string}
 */
proto.protowire.SubnetworkID.prototype.getBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes bytes = 1;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.protowire.SubnetworkID.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.protowire.SubnetworkID.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.SubnetworkID} returns this
 */
proto.protowire.SubnetworkID.prototype.setBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RequestAddressesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RequestAddressesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RequestAddressesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestAddressesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeallsubnetworks: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    subnetworkid: (f = msg.getSubnetworkid()) && proto.protowire.SubnetworkID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RequestAddressesMessage}
 */
proto.protowire.RequestAddressesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RequestAddressesMessage;
  return proto.protowire.RequestAddressesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RequestAddressesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RequestAddressesMessage}
 */
proto.protowire.RequestAddressesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeallsubnetworks(value);
      break;
    case 2:
      var value = new proto.protowire.SubnetworkID;
      reader.readMessage(value,proto.protowire.SubnetworkID.deserializeBinaryFromReader);
      msg.setSubnetworkid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RequestAddressesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RequestAddressesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RequestAddressesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestAddressesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeallsubnetworks();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSubnetworkid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protowire.SubnetworkID.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool includeAllSubnetworks = 1;
 * @return {boolean}
 */
proto.protowire.RequestAddressesMessage.prototype.getIncludeallsubnetworks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.RequestAddressesMessage} returns this
 */
proto.protowire.RequestAddressesMessage.prototype.setIncludeallsubnetworks = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional SubnetworkID subnetworkID = 2;
 * @return {?proto.protowire.SubnetworkID}
 */
proto.protowire.RequestAddressesMessage.prototype.getSubnetworkid = function() {
  return /** @type{?proto.protowire.SubnetworkID} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubnetworkID, 2));
};


/**
 * @param {?proto.protowire.SubnetworkID|undefined} value
 * @return {!proto.protowire.RequestAddressesMessage} returns this
*/
proto.protowire.RequestAddressesMessage.prototype.setSubnetworkid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.RequestAddressesMessage} returns this
 */
proto.protowire.RequestAddressesMessage.prototype.clearSubnetworkid = function() {
  return this.setSubnetworkid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.RequestAddressesMessage.prototype.hasSubnetworkid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.TransactionMessage.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.protowire.TransactionInput.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.protowire.TransactionOutput.toObject, includeInstance),
    locktime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    subnetworkid: (f = msg.getSubnetworkid()) && proto.protowire.SubnetworkID.toObject(includeInstance, f),
    gas: jspb.Message.getFieldWithDefault(msg, 6, 0),
    payloadhash: (f = msg.getPayloadhash()) && proto.protowire.Hash.toObject(includeInstance, f),
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionMessage}
 */
proto.protowire.TransactionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionMessage;
  return proto.protowire.TransactionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionMessage}
 */
proto.protowire.TransactionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.protowire.TransactionInput;
      reader.readMessage(value,proto.protowire.TransactionInput.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 3:
      var value = new proto.protowire.TransactionOutput;
      reader.readMessage(value,proto.protowire.TransactionOutput.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLocktime(value);
      break;
    case 5:
      var value = new proto.protowire.SubnetworkID;
      reader.readMessage(value,proto.protowire.SubnetworkID.deserializeBinaryFromReader);
      msg.setSubnetworkid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGas(value);
      break;
    case 7:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setPayloadhash(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protowire.TransactionInput.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protowire.TransactionOutput.serializeBinaryToWriter
    );
  }
  f = message.getLocktime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSubnetworkid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protowire.SubnetworkID.serializeBinaryToWriter
    );
  }
  f = message.getGas();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPayloadhash();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional int32 version = 1;
 * @return {number}
 */
proto.protowire.TransactionMessage.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated TransactionInput inputs = 2;
 * @return {!Array<!proto.protowire.TransactionInput>}
 */
proto.protowire.TransactionMessage.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.protowire.TransactionInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionInput, 2));
};


/**
 * @param {!Array<!proto.protowire.TransactionInput>} value
 * @return {!proto.protowire.TransactionMessage} returns this
*/
proto.protowire.TransactionMessage.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protowire.TransactionInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionInput}
 */
proto.protowire.TransactionMessage.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protowire.TransactionInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated TransactionOutput outputs = 3;
 * @return {!Array<!proto.protowire.TransactionOutput>}
 */
proto.protowire.TransactionMessage.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.protowire.TransactionOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionOutput, 3));
};


/**
 * @param {!Array<!proto.protowire.TransactionOutput>} value
 * @return {!proto.protowire.TransactionMessage} returns this
*/
proto.protowire.TransactionMessage.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protowire.TransactionOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionOutput}
 */
proto.protowire.TransactionMessage.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protowire.TransactionOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * optional uint64 lockTime = 4;
 * @return {number}
 */
proto.protowire.TransactionMessage.prototype.getLocktime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.setLocktime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SubnetworkID subnetworkID = 5;
 * @return {?proto.protowire.SubnetworkID}
 */
proto.protowire.TransactionMessage.prototype.getSubnetworkid = function() {
  return /** @type{?proto.protowire.SubnetworkID} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubnetworkID, 5));
};


/**
 * @param {?proto.protowire.SubnetworkID|undefined} value
 * @return {!proto.protowire.TransactionMessage} returns this
*/
proto.protowire.TransactionMessage.prototype.setSubnetworkid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.clearSubnetworkid = function() {
  return this.setSubnetworkid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.TransactionMessage.prototype.hasSubnetworkid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 gas = 6;
 * @return {number}
 */
proto.protowire.TransactionMessage.prototype.getGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.setGas = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Hash payloadHash = 7;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.TransactionMessage.prototype.getPayloadhash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 7));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.TransactionMessage} returns this
*/
proto.protowire.TransactionMessage.prototype.setPayloadhash = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.clearPayloadhash = function() {
  return this.setPayloadhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.TransactionMessage.prototype.hasPayloadhash = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes Payload = 8;
 * @return {string}
 */
proto.protowire.TransactionMessage.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes Payload = 8;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.protowire.TransactionMessage.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes Payload = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.protowire.TransactionMessage.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.TransactionMessage} returns this
 */
proto.protowire.TransactionMessage.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionInput.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    previousoutpoint: (f = msg.getPreviousoutpoint()) && proto.protowire.Outpoint.toObject(includeInstance, f),
    signaturescript: msg.getSignaturescript_asB64(),
    sequence: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionInput}
 */
proto.protowire.TransactionInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionInput;
  return proto.protowire.TransactionInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionInput}
 */
proto.protowire.TransactionInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.Outpoint;
      reader.readMessage(value,proto.protowire.Outpoint.deserializeBinaryFromReader);
      msg.setPreviousoutpoint(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignaturescript(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreviousoutpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.Outpoint.serializeBinaryToWriter
    );
  }
  f = message.getSignaturescript_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Outpoint PreviousOutpoint = 1;
 * @return {?proto.protowire.Outpoint}
 */
proto.protowire.TransactionInput.prototype.getPreviousoutpoint = function() {
  return /** @type{?proto.protowire.Outpoint} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Outpoint, 1));
};


/**
 * @param {?proto.protowire.Outpoint|undefined} value
 * @return {!proto.protowire.TransactionInput} returns this
*/
proto.protowire.TransactionInput.prototype.setPreviousoutpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.TransactionInput} returns this
 */
proto.protowire.TransactionInput.prototype.clearPreviousoutpoint = function() {
  return this.setPreviousoutpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.TransactionInput.prototype.hasPreviousoutpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes SignatureScript = 2;
 * @return {string}
 */
proto.protowire.TransactionInput.prototype.getSignaturescript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes SignatureScript = 2;
 * This is a type-conversion wrapper around `getSignaturescript()`
 * @return {string}
 */
proto.protowire.TransactionInput.prototype.getSignaturescript_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignaturescript()));
};


/**
 * optional bytes SignatureScript = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignaturescript()`
 * @return {!Uint8Array}
 */
proto.protowire.TransactionInput.prototype.getSignaturescript_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignaturescript()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.TransactionInput} returns this
 */
proto.protowire.TransactionInput.prototype.setSignaturescript = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 Sequence = 3;
 * @return {number}
 */
proto.protowire.TransactionInput.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionInput} returns this
 */
proto.protowire.TransactionInput.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.Outpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.Outpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.Outpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.Outpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionid: (f = msg.getTransactionid()) && proto.protowire.TransactionID.toObject(includeInstance, f),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.Outpoint}
 */
proto.protowire.Outpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.Outpoint;
  return proto.protowire.Outpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.Outpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.Outpoint}
 */
proto.protowire.Outpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.TransactionID;
      reader.readMessage(value,proto.protowire.TransactionID.deserializeBinaryFromReader);
      msg.setTransactionid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.Outpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.Outpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.Outpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.Outpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.TransactionID.serializeBinaryToWriter
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional TransactionID transactionID = 1;
 * @return {?proto.protowire.TransactionID}
 */
proto.protowire.Outpoint.prototype.getTransactionid = function() {
  return /** @type{?proto.protowire.TransactionID} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionID, 1));
};


/**
 * @param {?proto.protowire.TransactionID|undefined} value
 * @return {!proto.protowire.Outpoint} returns this
*/
proto.protowire.Outpoint.prototype.setTransactionid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.Outpoint} returns this
 */
proto.protowire.Outpoint.prototype.clearTransactionid = function() {
  return this.setTransactionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.Outpoint.prototype.hasTransactionid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.protowire.Outpoint.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.Outpoint} returns this
 */
proto.protowire.Outpoint.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionID.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionID.toObject = function(includeInstance, msg) {
  var f, obj = {
    bytes: msg.getBytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionID}
 */
proto.protowire.TransactionID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionID;
  return proto.protowire.TransactionID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionID}
 */
proto.protowire.TransactionID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes bytes = 1;
 * @return {string}
 */
proto.protowire.TransactionID.prototype.getBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes bytes = 1;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.protowire.TransactionID.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.protowire.TransactionID.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.TransactionID} returns this
 */
proto.protowire.TransactionID.prototype.setBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0),
    scriptpubkey: msg.getScriptpubkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionOutput}
 */
proto.protowire.TransactionOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionOutput;
  return proto.protowire.TransactionOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionOutput}
 */
proto.protowire.TransactionOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScriptpubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getScriptpubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint64 value = 1;
 * @return {number}
 */
proto.protowire.TransactionOutput.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionOutput} returns this
 */
proto.protowire.TransactionOutput.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes ScriptPubKey = 2;
 * @return {string}
 */
proto.protowire.TransactionOutput.prototype.getScriptpubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ScriptPubKey = 2;
 * This is a type-conversion wrapper around `getScriptpubkey()`
 * @return {string}
 */
proto.protowire.TransactionOutput.prototype.getScriptpubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScriptpubkey()));
};


/**
 * optional bytes ScriptPubKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScriptpubkey()`
 * @return {!Uint8Array}
 */
proto.protowire.TransactionOutput.prototype.getScriptpubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScriptpubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.TransactionOutput} returns this
 */
proto.protowire.TransactionOutput.prototype.setScriptpubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.BlockMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.BlockMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.BlockMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.BlockMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.protowire.BlockHeader.toObject(includeInstance, f),
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.protowire.TransactionMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.BlockMessage}
 */
proto.protowire.BlockMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.BlockMessage;
  return proto.protowire.BlockMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.BlockMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.BlockMessage}
 */
proto.protowire.BlockMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.BlockHeader;
      reader.readMessage(value,proto.protowire.BlockHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.protowire.TransactionMessage;
      reader.readMessage(value,proto.protowire.TransactionMessage.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.BlockMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.BlockMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.BlockMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.BlockHeader.serializeBinaryToWriter
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protowire.TransactionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockHeader header = 1;
 * @return {?proto.protowire.BlockHeader}
 */
proto.protowire.BlockMessage.prototype.getHeader = function() {
  return /** @type{?proto.protowire.BlockHeader} */ (
    jspb.Message.getWrapperField(this, proto.protowire.BlockHeader, 1));
};


/**
 * @param {?proto.protowire.BlockHeader|undefined} value
 * @return {!proto.protowire.BlockMessage} returns this
*/
proto.protowire.BlockMessage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.BlockMessage} returns this
 */
proto.protowire.BlockMessage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.BlockMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TransactionMessage transactions = 2;
 * @return {!Array<!proto.protowire.TransactionMessage>}
 */
proto.protowire.BlockMessage.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.protowire.TransactionMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionMessage, 2));
};


/**
 * @param {!Array<!proto.protowire.TransactionMessage>} value
 * @return {!proto.protowire.BlockMessage} returns this
*/
proto.protowire.BlockMessage.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protowire.TransactionMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionMessage}
 */
proto.protowire.BlockMessage.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protowire.TransactionMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockMessage} returns this
 */
proto.protowire.BlockMessage.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.BlockHeader.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.BlockHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.BlockHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.BlockHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    parenthashesList: jspb.Message.toObjectList(msg.getParenthashesList(),
    proto.protowire.Hash.toObject, includeInstance),
    hashmerkleroot: (f = msg.getHashmerkleroot()) && proto.protowire.Hash.toObject(includeInstance, f),
    acceptedidmerkleroot: (f = msg.getAcceptedidmerkleroot()) && proto.protowire.Hash.toObject(includeInstance, f),
    utxocommitment: (f = msg.getUtxocommitment()) && proto.protowire.Hash.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    bits: jspb.Message.getFieldWithDefault(msg, 7, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.BlockHeader}
 */
proto.protowire.BlockHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.BlockHeader;
  return proto.protowire.BlockHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.BlockHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.BlockHeader}
 */
proto.protowire.BlockHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.addParenthashes(value);
      break;
    case 3:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setHashmerkleroot(value);
      break;
    case 4:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setAcceptedidmerkleroot(value);
      break;
    case 5:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setUtxocommitment(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBits(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.BlockHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.BlockHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.BlockHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getParenthashesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getHashmerkleroot();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getAcceptedidmerkleroot();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getUtxocommitment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getBits();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional int32 version = 1;
 * @return {number}
 */
proto.protowire.BlockHeader.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Hash parentHashes = 2;
 * @return {!Array<!proto.protowire.Hash>}
 */
proto.protowire.BlockHeader.prototype.getParenthashesList = function() {
  return /** @type{!Array<!proto.protowire.Hash>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.Hash, 2));
};


/**
 * @param {!Array<!proto.protowire.Hash>} value
 * @return {!proto.protowire.BlockHeader} returns this
*/
proto.protowire.BlockHeader.prototype.setParenthashesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protowire.Hash=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.Hash}
 */
proto.protowire.BlockHeader.prototype.addParenthashes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protowire.Hash, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.clearParenthashesList = function() {
  return this.setParenthashesList([]);
};


/**
 * optional Hash hashMerkleRoot = 3;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.BlockHeader.prototype.getHashmerkleroot = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 3));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.BlockHeader} returns this
*/
proto.protowire.BlockHeader.prototype.setHashmerkleroot = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.clearHashmerkleroot = function() {
  return this.setHashmerkleroot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.BlockHeader.prototype.hasHashmerkleroot = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Hash acceptedIDMerkleRoot = 4;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.BlockHeader.prototype.getAcceptedidmerkleroot = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 4));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.BlockHeader} returns this
*/
proto.protowire.BlockHeader.prototype.setAcceptedidmerkleroot = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.clearAcceptedidmerkleroot = function() {
  return this.setAcceptedidmerkleroot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.BlockHeader.prototype.hasAcceptedidmerkleroot = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Hash utxoCommitment = 5;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.BlockHeader.prototype.getUtxocommitment = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 5));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.BlockHeader} returns this
*/
proto.protowire.BlockHeader.prototype.setUtxocommitment = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.clearUtxocommitment = function() {
  return this.setUtxocommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.BlockHeader.prototype.hasUtxocommitment = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 timestamp = 6;
 * @return {number}
 */
proto.protowire.BlockHeader.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 bits = 7;
 * @return {number}
 */
proto.protowire.BlockHeader.prototype.getBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.setBits = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 nonce = 8;
 * @return {number}
 */
proto.protowire.BlockHeader.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockHeader} returns this
 */
proto.protowire.BlockHeader.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.Hash.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.Hash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.Hash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.Hash.toObject = function(includeInstance, msg) {
  var f, obj = {
    bytes: msg.getBytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.Hash}
 */
proto.protowire.Hash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.Hash;
  return proto.protowire.Hash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.Hash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.Hash}
 */
proto.protowire.Hash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.Hash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.Hash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.Hash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.Hash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes bytes = 1;
 * @return {string}
 */
proto.protowire.Hash.prototype.getBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes bytes = 1;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.protowire.Hash.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.protowire.Hash.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.Hash} returns this
 */
proto.protowire.Hash.prototype.setBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RequestBlockLocatorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RequestBlockLocatorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RequestBlockLocatorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestBlockLocatorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    lowhash: (f = msg.getLowhash()) && proto.protowire.Hash.toObject(includeInstance, f),
    highhash: (f = msg.getHighhash()) && proto.protowire.Hash.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RequestBlockLocatorMessage}
 */
proto.protowire.RequestBlockLocatorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RequestBlockLocatorMessage;
  return proto.protowire.RequestBlockLocatorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RequestBlockLocatorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RequestBlockLocatorMessage}
 */
proto.protowire.RequestBlockLocatorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setLowhash(value);
      break;
    case 2:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setHighhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RequestBlockLocatorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RequestBlockLocatorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RequestBlockLocatorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestBlockLocatorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLowhash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getHighhash();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * optional Hash lowHash = 1;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.RequestBlockLocatorMessage.prototype.getLowhash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 1));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.RequestBlockLocatorMessage} returns this
*/
proto.protowire.RequestBlockLocatorMessage.prototype.setLowhash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.RequestBlockLocatorMessage} returns this
 */
proto.protowire.RequestBlockLocatorMessage.prototype.clearLowhash = function() {
  return this.setLowhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.RequestBlockLocatorMessage.prototype.hasLowhash = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Hash highHash = 2;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.RequestBlockLocatorMessage.prototype.getHighhash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 2));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.RequestBlockLocatorMessage} returns this
*/
proto.protowire.RequestBlockLocatorMessage.prototype.setHighhash = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.RequestBlockLocatorMessage} returns this
 */
proto.protowire.RequestBlockLocatorMessage.prototype.clearHighhash = function() {
  return this.setHighhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.RequestBlockLocatorMessage.prototype.hasHighhash = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.BlockLocatorMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.BlockLocatorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.BlockLocatorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.BlockLocatorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockLocatorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    hashesList: jspb.Message.toObjectList(msg.getHashesList(),
    proto.protowire.Hash.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.BlockLocatorMessage}
 */
proto.protowire.BlockLocatorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.BlockLocatorMessage;
  return proto.protowire.BlockLocatorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.BlockLocatorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.BlockLocatorMessage}
 */
proto.protowire.BlockLocatorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.addHashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.BlockLocatorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.BlockLocatorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.BlockLocatorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockLocatorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHashesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Hash hashes = 1;
 * @return {!Array<!proto.protowire.Hash>}
 */
proto.protowire.BlockLocatorMessage.prototype.getHashesList = function() {
  return /** @type{!Array<!proto.protowire.Hash>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.Hash, 1));
};


/**
 * @param {!Array<!proto.protowire.Hash>} value
 * @return {!proto.protowire.BlockLocatorMessage} returns this
*/
proto.protowire.BlockLocatorMessage.prototype.setHashesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protowire.Hash=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.Hash}
 */
proto.protowire.BlockLocatorMessage.prototype.addHashes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protowire.Hash, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockLocatorMessage} returns this
 */
proto.protowire.BlockLocatorMessage.prototype.clearHashesList = function() {
  return this.setHashesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RequestIBDBlocksMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RequestIBDBlocksMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RequestIBDBlocksMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestIBDBlocksMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    lowhash: (f = msg.getLowhash()) && proto.protowire.Hash.toObject(includeInstance, f),
    highhash: (f = msg.getHighhash()) && proto.protowire.Hash.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RequestIBDBlocksMessage}
 */
proto.protowire.RequestIBDBlocksMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RequestIBDBlocksMessage;
  return proto.protowire.RequestIBDBlocksMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RequestIBDBlocksMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RequestIBDBlocksMessage}
 */
proto.protowire.RequestIBDBlocksMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setLowhash(value);
      break;
    case 2:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setHighhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RequestIBDBlocksMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RequestIBDBlocksMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RequestIBDBlocksMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestIBDBlocksMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLowhash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getHighhash();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * optional Hash lowHash = 1;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.RequestIBDBlocksMessage.prototype.getLowhash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 1));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.RequestIBDBlocksMessage} returns this
*/
proto.protowire.RequestIBDBlocksMessage.prototype.setLowhash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.RequestIBDBlocksMessage} returns this
 */
proto.protowire.RequestIBDBlocksMessage.prototype.clearLowhash = function() {
  return this.setLowhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.RequestIBDBlocksMessage.prototype.hasLowhash = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Hash highHash = 2;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.RequestIBDBlocksMessage.prototype.getHighhash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 2));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.RequestIBDBlocksMessage} returns this
*/
proto.protowire.RequestIBDBlocksMessage.prototype.setHighhash = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.RequestIBDBlocksMessage} returns this
 */
proto.protowire.RequestIBDBlocksMessage.prototype.clearHighhash = function() {
  return this.setHighhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.RequestIBDBlocksMessage.prototype.hasHighhash = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RequestNextIBDBlocksMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RequestNextIBDBlocksMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RequestNextIBDBlocksMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestNextIBDBlocksMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RequestNextIBDBlocksMessage}
 */
proto.protowire.RequestNextIBDBlocksMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RequestNextIBDBlocksMessage;
  return proto.protowire.RequestNextIBDBlocksMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RequestNextIBDBlocksMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RequestNextIBDBlocksMessage}
 */
proto.protowire.RequestNextIBDBlocksMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RequestNextIBDBlocksMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RequestNextIBDBlocksMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RequestNextIBDBlocksMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestNextIBDBlocksMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.DoneIBDBlocksMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.DoneIBDBlocksMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.DoneIBDBlocksMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.DoneIBDBlocksMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.DoneIBDBlocksMessage}
 */
proto.protowire.DoneIBDBlocksMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.DoneIBDBlocksMessage;
  return proto.protowire.DoneIBDBlocksMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.DoneIBDBlocksMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.DoneIBDBlocksMessage}
 */
proto.protowire.DoneIBDBlocksMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.DoneIBDBlocksMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.DoneIBDBlocksMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.DoneIBDBlocksMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.DoneIBDBlocksMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.RequestRelayBlocksMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RequestRelayBlocksMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RequestRelayBlocksMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RequestRelayBlocksMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestRelayBlocksMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    hashesList: jspb.Message.toObjectList(msg.getHashesList(),
    proto.protowire.Hash.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RequestRelayBlocksMessage}
 */
proto.protowire.RequestRelayBlocksMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RequestRelayBlocksMessage;
  return proto.protowire.RequestRelayBlocksMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RequestRelayBlocksMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RequestRelayBlocksMessage}
 */
proto.protowire.RequestRelayBlocksMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.addHashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RequestRelayBlocksMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RequestRelayBlocksMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RequestRelayBlocksMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestRelayBlocksMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHashesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Hash hashes = 1;
 * @return {!Array<!proto.protowire.Hash>}
 */
proto.protowire.RequestRelayBlocksMessage.prototype.getHashesList = function() {
  return /** @type{!Array<!proto.protowire.Hash>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.Hash, 1));
};


/**
 * @param {!Array<!proto.protowire.Hash>} value
 * @return {!proto.protowire.RequestRelayBlocksMessage} returns this
*/
proto.protowire.RequestRelayBlocksMessage.prototype.setHashesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protowire.Hash=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.Hash}
 */
proto.protowire.RequestRelayBlocksMessage.prototype.addHashes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protowire.Hash, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.RequestRelayBlocksMessage} returns this
 */
proto.protowire.RequestRelayBlocksMessage.prototype.clearHashesList = function() {
  return this.setHashesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RequestSelectedTipMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RequestSelectedTipMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RequestSelectedTipMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestSelectedTipMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RequestSelectedTipMessage}
 */
proto.protowire.RequestSelectedTipMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RequestSelectedTipMessage;
  return proto.protowire.RequestSelectedTipMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RequestSelectedTipMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RequestSelectedTipMessage}
 */
proto.protowire.RequestSelectedTipMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RequestSelectedTipMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RequestSelectedTipMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RequestSelectedTipMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestSelectedTipMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.RequestTransactionsMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RequestTransactionsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RequestTransactionsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RequestTransactionsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestTransactionsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: jspb.Message.toObjectList(msg.getIdsList(),
    proto.protowire.TransactionID.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RequestTransactionsMessage}
 */
proto.protowire.RequestTransactionsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RequestTransactionsMessage;
  return proto.protowire.RequestTransactionsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RequestTransactionsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RequestTransactionsMessage}
 */
proto.protowire.RequestTransactionsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.TransactionID;
      reader.readMessage(value,proto.protowire.TransactionID.deserializeBinaryFromReader);
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RequestTransactionsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RequestTransactionsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RequestTransactionsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RequestTransactionsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protowire.TransactionID.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransactionID ids = 1;
 * @return {!Array<!proto.protowire.TransactionID>}
 */
proto.protowire.RequestTransactionsMessage.prototype.getIdsList = function() {
  return /** @type{!Array<!proto.protowire.TransactionID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionID, 1));
};


/**
 * @param {!Array<!proto.protowire.TransactionID>} value
 * @return {!proto.protowire.RequestTransactionsMessage} returns this
*/
proto.protowire.RequestTransactionsMessage.prototype.setIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protowire.TransactionID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionID}
 */
proto.protowire.RequestTransactionsMessage.prototype.addIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protowire.TransactionID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.RequestTransactionsMessage} returns this
 */
proto.protowire.RequestTransactionsMessage.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionNotFoundMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionNotFoundMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionNotFoundMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionNotFoundMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.protowire.TransactionID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionNotFoundMessage}
 */
proto.protowire.TransactionNotFoundMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionNotFoundMessage;
  return proto.protowire.TransactionNotFoundMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionNotFoundMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionNotFoundMessage}
 */
proto.protowire.TransactionNotFoundMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.TransactionID;
      reader.readMessage(value,proto.protowire.TransactionID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionNotFoundMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionNotFoundMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionNotFoundMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionNotFoundMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.TransactionID.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionID id = 1;
 * @return {?proto.protowire.TransactionID}
 */
proto.protowire.TransactionNotFoundMessage.prototype.getId = function() {
  return /** @type{?proto.protowire.TransactionID} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionID, 1));
};


/**
 * @param {?proto.protowire.TransactionID|undefined} value
 * @return {!proto.protowire.TransactionNotFoundMessage} returns this
*/
proto.protowire.TransactionNotFoundMessage.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.TransactionNotFoundMessage} returns this
 */
proto.protowire.TransactionNotFoundMessage.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.TransactionNotFoundMessage.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.InvRelayBlockMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.InvRelayBlockMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.InvRelayBlockMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.InvRelayBlockMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: (f = msg.getHash()) && proto.protowire.Hash.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.InvRelayBlockMessage}
 */
proto.protowire.InvRelayBlockMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.InvRelayBlockMessage;
  return proto.protowire.InvRelayBlockMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.InvRelayBlockMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.InvRelayBlockMessage}
 */
proto.protowire.InvRelayBlockMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.InvRelayBlockMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.InvRelayBlockMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.InvRelayBlockMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.InvRelayBlockMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * optional Hash hash = 1;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.InvRelayBlockMessage.prototype.getHash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 1));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.InvRelayBlockMessage} returns this
*/
proto.protowire.InvRelayBlockMessage.prototype.setHash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.InvRelayBlockMessage} returns this
 */
proto.protowire.InvRelayBlockMessage.prototype.clearHash = function() {
  return this.setHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.InvRelayBlockMessage.prototype.hasHash = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.InvTransactionsMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.InvTransactionsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.InvTransactionsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.InvTransactionsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.InvTransactionsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: jspb.Message.toObjectList(msg.getIdsList(),
    proto.protowire.TransactionID.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.InvTransactionsMessage}
 */
proto.protowire.InvTransactionsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.InvTransactionsMessage;
  return proto.protowire.InvTransactionsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.InvTransactionsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.InvTransactionsMessage}
 */
proto.protowire.InvTransactionsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.TransactionID;
      reader.readMessage(value,proto.protowire.TransactionID.deserializeBinaryFromReader);
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.InvTransactionsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.InvTransactionsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.InvTransactionsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.InvTransactionsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protowire.TransactionID.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransactionID ids = 1;
 * @return {!Array<!proto.protowire.TransactionID>}
 */
proto.protowire.InvTransactionsMessage.prototype.getIdsList = function() {
  return /** @type{!Array<!proto.protowire.TransactionID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionID, 1));
};


/**
 * @param {!Array<!proto.protowire.TransactionID>} value
 * @return {!proto.protowire.InvTransactionsMessage} returns this
*/
proto.protowire.InvTransactionsMessage.prototype.setIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protowire.TransactionID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionID}
 */
proto.protowire.InvTransactionsMessage.prototype.addIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protowire.TransactionID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.InvTransactionsMessage} returns this
 */
proto.protowire.InvTransactionsMessage.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.PingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.PingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.PingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.PingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.PingMessage}
 */
proto.protowire.PingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.PingMessage;
  return proto.protowire.PingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.PingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.PingMessage}
 */
proto.protowire.PingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.PingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.PingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.PingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.PingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.protowire.PingMessage.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.PingMessage} returns this
 */
proto.protowire.PingMessage.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.PongMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.PongMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.PongMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.PongMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.PongMessage}
 */
proto.protowire.PongMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.PongMessage;
  return proto.protowire.PongMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.PongMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.PongMessage}
 */
proto.protowire.PongMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.PongMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.PongMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.PongMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.PongMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.protowire.PongMessage.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.PongMessage} returns this
 */
proto.protowire.PongMessage.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.SelectedTipMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.SelectedTipMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.SelectedTipMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SelectedTipMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectedtiphash: (f = msg.getSelectedtiphash()) && proto.protowire.Hash.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.SelectedTipMessage}
 */
proto.protowire.SelectedTipMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.SelectedTipMessage;
  return proto.protowire.SelectedTipMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.SelectedTipMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.SelectedTipMessage}
 */
proto.protowire.SelectedTipMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setSelectedtiphash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.SelectedTipMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.SelectedTipMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.SelectedTipMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SelectedTipMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectedtiphash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * optional Hash selectedTipHash = 1;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.SelectedTipMessage.prototype.getSelectedtiphash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 1));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.SelectedTipMessage} returns this
*/
proto.protowire.SelectedTipMessage.prototype.setSelectedtiphash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.SelectedTipMessage} returns this
 */
proto.protowire.SelectedTipMessage.prototype.clearSelectedtiphash = function() {
  return this.setSelectedtiphash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.SelectedTipMessage.prototype.hasSelectedtiphash = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.VerackMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.VerackMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.VerackMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.VerackMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.VerackMessage}
 */
proto.protowire.VerackMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.VerackMessage;
  return proto.protowire.VerackMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.VerackMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.VerackMessage}
 */
proto.protowire.VerackMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.VerackMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.VerackMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.VerackMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.VerackMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.VersionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.VersionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.VersionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.VersionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolversion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    services: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: (f = msg.getAddress()) && proto.protowire.NetAddress.toObject(includeInstance, f),
    id: msg.getId_asB64(),
    useragent: jspb.Message.getFieldWithDefault(msg, 6, ""),
    selectedtiphash: (f = msg.getSelectedtiphash()) && proto.protowire.Hash.toObject(includeInstance, f),
    disablerelaytx: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    subnetworkid: (f = msg.getSubnetworkid()) && proto.protowire.SubnetworkID.toObject(includeInstance, f),
    network: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.VersionMessage}
 */
proto.protowire.VersionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.VersionMessage;
  return proto.protowire.VersionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.VersionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.VersionMessage}
 */
proto.protowire.VersionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProtocolversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setServices(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = new proto.protowire.NetAddress;
      reader.readMessage(value,proto.protowire.NetAddress.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseragent(value);
      break;
    case 7:
      var value = new proto.protowire.Hash;
      reader.readMessage(value,proto.protowire.Hash.deserializeBinaryFromReader);
      msg.setSelectedtiphash(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisablerelaytx(value);
      break;
    case 9:
      var value = new proto.protowire.SubnetworkID;
      reader.readMessage(value,proto.protowire.SubnetworkID.deserializeBinaryFromReader);
      msg.setSubnetworkid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.VersionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.VersionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.VersionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.VersionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolversion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getServices();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protowire.NetAddress.serializeBinaryToWriter
    );
  }
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getUseragent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSelectedtiphash();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protowire.Hash.serializeBinaryToWriter
    );
  }
  f = message.getDisablerelaytx();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSubnetworkid();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.protowire.SubnetworkID.serializeBinaryToWriter
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional uint32 protocolVersion = 1;
 * @return {number}
 */
proto.protowire.VersionMessage.prototype.getProtocolversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.setProtocolversion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 services = 2;
 * @return {number}
 */
proto.protowire.VersionMessage.prototype.getServices = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.setServices = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.protowire.VersionMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional NetAddress address = 4;
 * @return {?proto.protowire.NetAddress}
 */
proto.protowire.VersionMessage.prototype.getAddress = function() {
  return /** @type{?proto.protowire.NetAddress} */ (
    jspb.Message.getWrapperField(this, proto.protowire.NetAddress, 4));
};


/**
 * @param {?proto.protowire.NetAddress|undefined} value
 * @return {!proto.protowire.VersionMessage} returns this
*/
proto.protowire.VersionMessage.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.VersionMessage.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes id = 5;
 * @return {string}
 */
proto.protowire.VersionMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes id = 5;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.protowire.VersionMessage.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.protowire.VersionMessage.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional string userAgent = 6;
 * @return {string}
 */
proto.protowire.VersionMessage.prototype.getUseragent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.setUseragent = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Hash selectedTipHash = 7;
 * @return {?proto.protowire.Hash}
 */
proto.protowire.VersionMessage.prototype.getSelectedtiphash = function() {
  return /** @type{?proto.protowire.Hash} */ (
    jspb.Message.getWrapperField(this, proto.protowire.Hash, 7));
};


/**
 * @param {?proto.protowire.Hash|undefined} value
 * @return {!proto.protowire.VersionMessage} returns this
*/
proto.protowire.VersionMessage.prototype.setSelectedtiphash = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.clearSelectedtiphash = function() {
  return this.setSelectedtiphash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.VersionMessage.prototype.hasSelectedtiphash = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool disableRelayTx = 8;
 * @return {boolean}
 */
proto.protowire.VersionMessage.prototype.getDisablerelaytx = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.setDisablerelaytx = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional SubnetworkID subnetworkID = 9;
 * @return {?proto.protowire.SubnetworkID}
 */
proto.protowire.VersionMessage.prototype.getSubnetworkid = function() {
  return /** @type{?proto.protowire.SubnetworkID} */ (
    jspb.Message.getWrapperField(this, proto.protowire.SubnetworkID, 9));
};


/**
 * @param {?proto.protowire.SubnetworkID|undefined} value
 * @return {!proto.protowire.VersionMessage} returns this
*/
proto.protowire.VersionMessage.prototype.setSubnetworkid = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.clearSubnetworkid = function() {
  return this.setSubnetworkid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.VersionMessage.prototype.hasSubnetworkid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string network = 10;
 * @return {string}
 */
proto.protowire.VersionMessage.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.VersionMessage} returns this
 */
proto.protowire.VersionMessage.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RejectMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RejectMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RejectMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RejectMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RejectMessage}
 */
proto.protowire.RejectMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RejectMessage;
  return proto.protowire.RejectMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RejectMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RejectMessage}
 */
proto.protowire.RejectMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RejectMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RejectMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RejectMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RejectMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.protowire.RejectMessage.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.RejectMessage} returns this
 */
proto.protowire.RejectMessage.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.RPCError.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.RPCError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.RPCError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RPCError.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.RPCError}
 */
proto.protowire.RPCError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.RPCError;
  return proto.protowire.RPCError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.RPCError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.RPCError}
 */
proto.protowire.RPCError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.RPCError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.RPCError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.RPCError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.RPCError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.protowire.RPCError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.RPCError} returns this
 */
proto.protowire.RPCError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetCurrentNetworkRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetCurrentNetworkRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetCurrentNetworkRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetCurrentNetworkRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetCurrentNetworkRequestMessage}
 */
proto.protowire.GetCurrentNetworkRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetCurrentNetworkRequestMessage;
  return proto.protowire.GetCurrentNetworkRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetCurrentNetworkRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetCurrentNetworkRequestMessage}
 */
proto.protowire.GetCurrentNetworkRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetCurrentNetworkRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetCurrentNetworkRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetCurrentNetworkRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetCurrentNetworkRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetCurrentNetworkResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetCurrentNetworkResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetCurrentNetworkResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetCurrentNetworkResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentnetwork: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetCurrentNetworkResponseMessage}
 */
proto.protowire.GetCurrentNetworkResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetCurrentNetworkResponseMessage;
  return proto.protowire.GetCurrentNetworkResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetCurrentNetworkResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetCurrentNetworkResponseMessage}
 */
proto.protowire.GetCurrentNetworkResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentnetwork(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetCurrentNetworkResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetCurrentNetworkResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetCurrentNetworkResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetCurrentNetworkResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentnetwork();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string currentNetwork = 1;
 * @return {string}
 */
proto.protowire.GetCurrentNetworkResponseMessage.prototype.getCurrentnetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetCurrentNetworkResponseMessage} returns this
 */
proto.protowire.GetCurrentNetworkResponseMessage.prototype.setCurrentnetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetCurrentNetworkResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetCurrentNetworkResponseMessage} returns this
*/
proto.protowire.GetCurrentNetworkResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetCurrentNetworkResponseMessage} returns this
 */
proto.protowire.GetCurrentNetworkResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetCurrentNetworkResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.SubmitBlockRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.SubmitBlockRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.SubmitBlockRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitBlockRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockhex: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.SubmitBlockRequestMessage}
 */
proto.protowire.SubmitBlockRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.SubmitBlockRequestMessage;
  return proto.protowire.SubmitBlockRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.SubmitBlockRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.SubmitBlockRequestMessage}
 */
proto.protowire.SubmitBlockRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockhex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.SubmitBlockRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.SubmitBlockRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.SubmitBlockRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitBlockRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockhex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string blockHex = 1;
 * @return {string}
 */
proto.protowire.SubmitBlockRequestMessage.prototype.getBlockhex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.SubmitBlockRequestMessage} returns this
 */
proto.protowire.SubmitBlockRequestMessage.prototype.setBlockhex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.SubmitBlockResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.SubmitBlockResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.SubmitBlockResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitBlockResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.SubmitBlockResponseMessage}
 */
proto.protowire.SubmitBlockResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.SubmitBlockResponseMessage;
  return proto.protowire.SubmitBlockResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.SubmitBlockResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.SubmitBlockResponseMessage}
 */
proto.protowire.SubmitBlockResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.SubmitBlockResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.SubmitBlockResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.SubmitBlockResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitBlockResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.SubmitBlockResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.SubmitBlockResponseMessage} returns this
*/
proto.protowire.SubmitBlockResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.SubmitBlockResponseMessage} returns this
 */
proto.protowire.SubmitBlockResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.SubmitBlockResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockTemplateRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockTemplateRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockTemplateRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockTemplateRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    payaddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    longpollid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockTemplateRequestMessage}
 */
proto.protowire.GetBlockTemplateRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockTemplateRequestMessage;
  return proto.protowire.GetBlockTemplateRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockTemplateRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockTemplateRequestMessage}
 */
proto.protowire.GetBlockTemplateRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayaddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongpollid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockTemplateRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockTemplateRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockTemplateRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockTemplateRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLongpollid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string payAddress = 1;
 * @return {string}
 */
proto.protowire.GetBlockTemplateRequestMessage.prototype.getPayaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateRequestMessage} returns this
 */
proto.protowire.GetBlockTemplateRequestMessage.prototype.setPayaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string longPollId = 2;
 * @return {string}
 */
proto.protowire.GetBlockTemplateRequestMessage.prototype.getLongpollid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateRequestMessage} returns this
 */
proto.protowire.GetBlockTemplateRequestMessage.prototype.setLongpollid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetBlockTemplateResponseMessage.repeatedFields_ = [3,5,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockTemplateResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockTemplateResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockTemplateResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    bits: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currenttime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parenthashesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    masslimit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.protowire.GetBlockTemplateTransactionMessage.toObject, includeInstance),
    hashmerkleroot: jspb.Message.getFieldWithDefault(msg, 6, ""),
    acceptedidmerkleroot: jspb.Message.getFieldWithDefault(msg, 7, ""),
    utxocommitment: jspb.Message.getFieldWithDefault(msg, 8, ""),
    version: jspb.Message.getFieldWithDefault(msg, 9, 0),
    longpollid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    targetdifficulty: jspb.Message.getFieldWithDefault(msg, 11, ""),
    mintime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    maxtime: jspb.Message.getFieldWithDefault(msg, 13, 0),
    mutablefieldsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    noncerange: jspb.Message.getFieldWithDefault(msg, 15, ""),
    issynced: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    isconnected: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockTemplateResponseMessage}
 */
proto.protowire.GetBlockTemplateResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockTemplateResponseMessage;
  return proto.protowire.GetBlockTemplateResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockTemplateResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockTemplateResponseMessage}
 */
proto.protowire.GetBlockTemplateResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBits(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrenttime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addParenthashes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMasslimit(value);
      break;
    case 5:
      var value = new proto.protowire.GetBlockTemplateTransactionMessage;
      reader.readMessage(value,proto.protowire.GetBlockTemplateTransactionMessage.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHashmerkleroot(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcceptedidmerkleroot(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUtxocommitment(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongpollid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetdifficulty(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMintime(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxtime(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addMutablefields(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoncerange(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssynced(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsconnected(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockTemplateResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockTemplateResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockTemplateResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBits();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrenttime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getParenthashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getMasslimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protowire.GetBlockTemplateTransactionMessage.serializeBinaryToWriter
    );
  }
  f = message.getHashmerkleroot();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAcceptedidmerkleroot();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUtxocommitment();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getLongpollid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTargetdifficulty();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMintime();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getMaxtime();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getMutablefieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getNoncerange();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getIssynced();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getIsconnected();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string bits = 1;
 * @return {string}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getBits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setBits = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 currentTime = 2;
 * @return {number}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getCurrenttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setCurrenttime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string parentHashes = 3;
 * @return {!Array<string>}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getParenthashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setParenthashesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.addParenthashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.clearParenthashesList = function() {
  return this.setParenthashesList([]);
};


/**
 * optional int32 massLimit = 4;
 * @return {number}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getMasslimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setMasslimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated GetBlockTemplateTransactionMessage transactions = 5;
 * @return {!Array<!proto.protowire.GetBlockTemplateTransactionMessage>}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.protowire.GetBlockTemplateTransactionMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.GetBlockTemplateTransactionMessage, 5));
};


/**
 * @param {!Array<!proto.protowire.GetBlockTemplateTransactionMessage>} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
*/
proto.protowire.GetBlockTemplateResponseMessage.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protowire.GetBlockTemplateTransactionMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protowire.GetBlockTemplateTransactionMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional string hashMerkleRoot = 6;
 * @return {string}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getHashmerkleroot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setHashmerkleroot = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string acceptedIDMerkleRoot = 7;
 * @return {string}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getAcceptedidmerkleroot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setAcceptedidmerkleroot = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string utxoCommitment = 8;
 * @return {string}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getUtxocommitment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setUtxocommitment = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 version = 9;
 * @return {number}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string longPollId = 10;
 * @return {string}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getLongpollid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setLongpollid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string targetDifficulty = 11;
 * @return {string}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getTargetdifficulty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setTargetdifficulty = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 minTime = 12;
 * @return {number}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getMintime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setMintime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 maxTime = 13;
 * @return {number}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getMaxtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setMaxtime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated string mutableFields = 14;
 * @return {!Array<string>}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getMutablefieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setMutablefieldsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.addMutablefields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.clearMutablefieldsList = function() {
  return this.setMutablefieldsList([]);
};


/**
 * optional string nonceRange = 15;
 * @return {string}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getNoncerange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setNoncerange = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional bool isSynced = 16;
 * @return {boolean}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getIssynced = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setIssynced = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool isConnected = 17;
 * @return {boolean}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getIsconnected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.setIsconnected = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
*/
proto.protowire.GetBlockTemplateResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetBlockTemplateResponseMessage} returns this
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetBlockTemplateResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetBlockTemplateTransactionMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockTemplateTransactionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockTemplateTransactionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockTemplateTransactionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dependsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    mass: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage}
 */
proto.protowire.GetBlockTemplateTransactionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockTemplateTransactionMessage;
  return proto.protowire.GetBlockTemplateTransactionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockTemplateTransactionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage}
 */
proto.protowire.GetBlockTemplateTransactionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDepends(values[i]);
      }
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMass(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockTemplateTransactionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockTemplateTransactionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockTemplateTransactionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDependsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getMass();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage} returns this
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage} returns this
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 depends = 3;
 * @return {!Array<number>}
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.getDependsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage} returns this
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.setDependsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage} returns this
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.addDepends = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage} returns this
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.clearDependsList = function() {
  return this.setDependsList([]);
};


/**
 * optional uint64 mass = 4;
 * @return {number}
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.getMass = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage} returns this
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.setMass = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 fee = 5;
 * @return {number}
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockTemplateTransactionMessage} returns this
 */
proto.protowire.GetBlockTemplateTransactionMessage.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyBlockAddedRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyBlockAddedRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyBlockAddedRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyBlockAddedRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyBlockAddedRequestMessage}
 */
proto.protowire.NotifyBlockAddedRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyBlockAddedRequestMessage;
  return proto.protowire.NotifyBlockAddedRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyBlockAddedRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyBlockAddedRequestMessage}
 */
proto.protowire.NotifyBlockAddedRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyBlockAddedRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyBlockAddedRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyBlockAddedRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyBlockAddedRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyBlockAddedResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyBlockAddedResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyBlockAddedResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyBlockAddedResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyBlockAddedResponseMessage}
 */
proto.protowire.NotifyBlockAddedResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyBlockAddedResponseMessage;
  return proto.protowire.NotifyBlockAddedResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyBlockAddedResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyBlockAddedResponseMessage}
 */
proto.protowire.NotifyBlockAddedResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyBlockAddedResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyBlockAddedResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyBlockAddedResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyBlockAddedResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.NotifyBlockAddedResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.NotifyBlockAddedResponseMessage} returns this
*/
proto.protowire.NotifyBlockAddedResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.NotifyBlockAddedResponseMessage} returns this
 */
proto.protowire.NotifyBlockAddedResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.NotifyBlockAddedResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.BlockAddedNotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.BlockAddedNotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.BlockAddedNotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockAddedNotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto.protowire.BlockMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.BlockAddedNotificationMessage}
 */
proto.protowire.BlockAddedNotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.BlockAddedNotificationMessage;
  return proto.protowire.BlockAddedNotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.BlockAddedNotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.BlockAddedNotificationMessage}
 */
proto.protowire.BlockAddedNotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.BlockMessage;
      reader.readMessage(value,proto.protowire.BlockMessage.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.BlockAddedNotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.BlockAddedNotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.BlockAddedNotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockAddedNotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.BlockMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockMessage block = 1;
 * @return {?proto.protowire.BlockMessage}
 */
proto.protowire.BlockAddedNotificationMessage.prototype.getBlock = function() {
  return /** @type{?proto.protowire.BlockMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.BlockMessage, 1));
};


/**
 * @param {?proto.protowire.BlockMessage|undefined} value
 * @return {!proto.protowire.BlockAddedNotificationMessage} returns this
*/
proto.protowire.BlockAddedNotificationMessage.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.BlockAddedNotificationMessage} returns this
 */
proto.protowire.BlockAddedNotificationMessage.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.BlockAddedNotificationMessage.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetPeerAddressesRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetPeerAddressesRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetPeerAddressesRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetPeerAddressesRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetPeerAddressesRequestMessage}
 */
proto.protowire.GetPeerAddressesRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetPeerAddressesRequestMessage;
  return proto.protowire.GetPeerAddressesRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetPeerAddressesRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetPeerAddressesRequestMessage}
 */
proto.protowire.GetPeerAddressesRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetPeerAddressesRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetPeerAddressesRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetPeerAddressesRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetPeerAddressesRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetPeerAddressesResponseMessage.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetPeerAddressesResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetPeerAddressesResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetPeerAddressesResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.protowire.GetPeerAddressesKnownAddressMessage.toObject, includeInstance),
    bannedaddressesList: jspb.Message.toObjectList(msg.getBannedaddressesList(),
    proto.protowire.GetPeerAddressesKnownAddressMessage.toObject, includeInstance),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetPeerAddressesResponseMessage}
 */
proto.protowire.GetPeerAddressesResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetPeerAddressesResponseMessage;
  return proto.protowire.GetPeerAddressesResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetPeerAddressesResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetPeerAddressesResponseMessage}
 */
proto.protowire.GetPeerAddressesResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.GetPeerAddressesKnownAddressMessage;
      reader.readMessage(value,proto.protowire.GetPeerAddressesKnownAddressMessage.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    case 2:
      var value = new proto.protowire.GetPeerAddressesKnownAddressMessage;
      reader.readMessage(value,proto.protowire.GetPeerAddressesKnownAddressMessage.deserializeBinaryFromReader);
      msg.addBannedaddresses(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetPeerAddressesResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetPeerAddressesResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetPeerAddressesResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protowire.GetPeerAddressesKnownAddressMessage.serializeBinaryToWriter
    );
  }
  f = message.getBannedaddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protowire.GetPeerAddressesKnownAddressMessage.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetPeerAddressesKnownAddressMessage addresses = 1;
 * @return {!Array<!proto.protowire.GetPeerAddressesKnownAddressMessage>}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.protowire.GetPeerAddressesKnownAddressMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.GetPeerAddressesKnownAddressMessage, 1));
};


/**
 * @param {!Array<!proto.protowire.GetPeerAddressesKnownAddressMessage>} value
 * @return {!proto.protowire.GetPeerAddressesResponseMessage} returns this
*/
proto.protowire.GetPeerAddressesResponseMessage.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protowire.GetPeerAddressesKnownAddressMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetPeerAddressesKnownAddressMessage}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protowire.GetPeerAddressesKnownAddressMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetPeerAddressesResponseMessage} returns this
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};


/**
 * repeated GetPeerAddressesKnownAddressMessage bannedAddresses = 2;
 * @return {!Array<!proto.protowire.GetPeerAddressesKnownAddressMessage>}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.getBannedaddressesList = function() {
  return /** @type{!Array<!proto.protowire.GetPeerAddressesKnownAddressMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.GetPeerAddressesKnownAddressMessage, 2));
};


/**
 * @param {!Array<!proto.protowire.GetPeerAddressesKnownAddressMessage>} value
 * @return {!proto.protowire.GetPeerAddressesResponseMessage} returns this
*/
proto.protowire.GetPeerAddressesResponseMessage.prototype.setBannedaddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protowire.GetPeerAddressesKnownAddressMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetPeerAddressesKnownAddressMessage}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.addBannedaddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protowire.GetPeerAddressesKnownAddressMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetPeerAddressesResponseMessage} returns this
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.clearBannedaddressesList = function() {
  return this.setBannedaddressesList([]);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetPeerAddressesResponseMessage} returns this
*/
proto.protowire.GetPeerAddressesResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetPeerAddressesResponseMessage} returns this
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetPeerAddressesResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetPeerAddressesKnownAddressMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetPeerAddressesKnownAddressMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetPeerAddressesKnownAddressMessage}
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetPeerAddressesKnownAddressMessage;
  return proto.protowire.GetPeerAddressesKnownAddressMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetPeerAddressesKnownAddressMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetPeerAddressesKnownAddressMessage}
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetPeerAddressesKnownAddressMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetPeerAddressesKnownAddressMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Addr = 1;
 * @return {string}
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetPeerAddressesKnownAddressMessage} returns this
 */
proto.protowire.GetPeerAddressesKnownAddressMessage.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetSelectedTipHashRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetSelectedTipHashRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetSelectedTipHashRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSelectedTipHashRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetSelectedTipHashRequestMessage}
 */
proto.protowire.GetSelectedTipHashRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetSelectedTipHashRequestMessage;
  return proto.protowire.GetSelectedTipHashRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetSelectedTipHashRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetSelectedTipHashRequestMessage}
 */
proto.protowire.GetSelectedTipHashRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetSelectedTipHashRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetSelectedTipHashRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetSelectedTipHashRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSelectedTipHashRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetSelectedTipHashResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetSelectedTipHashResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetSelectedTipHashResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSelectedTipHashResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectedtiphash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetSelectedTipHashResponseMessage}
 */
proto.protowire.GetSelectedTipHashResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetSelectedTipHashResponseMessage;
  return proto.protowire.GetSelectedTipHashResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetSelectedTipHashResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetSelectedTipHashResponseMessage}
 */
proto.protowire.GetSelectedTipHashResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectedtiphash(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetSelectedTipHashResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetSelectedTipHashResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetSelectedTipHashResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSelectedTipHashResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectedtiphash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string selectedTipHash = 1;
 * @return {string}
 */
proto.protowire.GetSelectedTipHashResponseMessage.prototype.getSelectedtiphash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetSelectedTipHashResponseMessage} returns this
 */
proto.protowire.GetSelectedTipHashResponseMessage.prototype.setSelectedtiphash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetSelectedTipHashResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetSelectedTipHashResponseMessage} returns this
*/
proto.protowire.GetSelectedTipHashResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetSelectedTipHashResponseMessage} returns this
 */
proto.protowire.GetSelectedTipHashResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetSelectedTipHashResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.MempoolEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.MempoolEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.MempoolEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.MempoolEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transactionverbosedata: (f = msg.getTransactionverbosedata()) && proto.protowire.TransactionVerboseData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.MempoolEntry}
 */
proto.protowire.MempoolEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.MempoolEntry;
  return proto.protowire.MempoolEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.MempoolEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.MempoolEntry}
 */
proto.protowire.MempoolEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    case 2:
      var value = new proto.protowire.TransactionVerboseData;
      reader.readMessage(value,proto.protowire.TransactionVerboseData.deserializeBinaryFromReader);
      msg.setTransactionverbosedata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.MempoolEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.MempoolEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.MempoolEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.MempoolEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTransactionverbosedata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protowire.TransactionVerboseData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 fee = 1;
 * @return {number}
 */
proto.protowire.MempoolEntry.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.MempoolEntry} returns this
 */
proto.protowire.MempoolEntry.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TransactionVerboseData transactionVerboseData = 2;
 * @return {?proto.protowire.TransactionVerboseData}
 */
proto.protowire.MempoolEntry.prototype.getTransactionverbosedata = function() {
  return /** @type{?proto.protowire.TransactionVerboseData} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionVerboseData, 2));
};


/**
 * @param {?proto.protowire.TransactionVerboseData|undefined} value
 * @return {!proto.protowire.MempoolEntry} returns this
*/
proto.protowire.MempoolEntry.prototype.setTransactionverbosedata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.MempoolEntry} returns this
 */
proto.protowire.MempoolEntry.prototype.clearTransactionverbosedata = function() {
  return this.setTransactionverbosedata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.MempoolEntry.prototype.hasTransactionverbosedata = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetMempoolEntryRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetMempoolEntryRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetMempoolEntryRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntryRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetMempoolEntryRequestMessage}
 */
proto.protowire.GetMempoolEntryRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetMempoolEntryRequestMessage;
  return proto.protowire.GetMempoolEntryRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetMempoolEntryRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetMempoolEntryRequestMessage}
 */
proto.protowire.GetMempoolEntryRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetMempoolEntryRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetMempoolEntryRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetMempoolEntryRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntryRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string txId = 1;
 * @return {string}
 */
proto.protowire.GetMempoolEntryRequestMessage.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetMempoolEntryRequestMessage} returns this
 */
proto.protowire.GetMempoolEntryRequestMessage.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetMempoolEntryResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetMempoolEntryResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntryResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.protowire.MempoolEntry.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetMempoolEntryResponseMessage}
 */
proto.protowire.GetMempoolEntryResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetMempoolEntryResponseMessage;
  return proto.protowire.GetMempoolEntryResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetMempoolEntryResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetMempoolEntryResponseMessage}
 */
proto.protowire.GetMempoolEntryResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.MempoolEntry;
      reader.readMessage(value,proto.protowire.MempoolEntry.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetMempoolEntryResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetMempoolEntryResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntryResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.MempoolEntry.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional MempoolEntry entry = 1;
 * @return {?proto.protowire.MempoolEntry}
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.getEntry = function() {
  return /** @type{?proto.protowire.MempoolEntry} */ (
    jspb.Message.getWrapperField(this, proto.protowire.MempoolEntry, 1));
};


/**
 * @param {?proto.protowire.MempoolEntry|undefined} value
 * @return {!proto.protowire.GetMempoolEntryResponseMessage} returns this
*/
proto.protowire.GetMempoolEntryResponseMessage.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetMempoolEntryResponseMessage} returns this
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetMempoolEntryResponseMessage} returns this
*/
proto.protowire.GetMempoolEntryResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetMempoolEntryResponseMessage} returns this
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetMempoolEntryResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetMempoolEntriesRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetMempoolEntriesRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetMempoolEntriesRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntriesRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetMempoolEntriesRequestMessage}
 */
proto.protowire.GetMempoolEntriesRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetMempoolEntriesRequestMessage;
  return proto.protowire.GetMempoolEntriesRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetMempoolEntriesRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetMempoolEntriesRequestMessage}
 */
proto.protowire.GetMempoolEntriesRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetMempoolEntriesRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetMempoolEntriesRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetMempoolEntriesRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntriesRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetMempoolEntriesResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetMempoolEntriesResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetMempoolEntriesResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntriesResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.protowire.MempoolEntry.toObject, includeInstance),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetMempoolEntriesResponseMessage}
 */
proto.protowire.GetMempoolEntriesResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetMempoolEntriesResponseMessage;
  return proto.protowire.GetMempoolEntriesResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetMempoolEntriesResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetMempoolEntriesResponseMessage}
 */
proto.protowire.GetMempoolEntriesResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.MempoolEntry;
      reader.readMessage(value,proto.protowire.MempoolEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetMempoolEntriesResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetMempoolEntriesResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetMempoolEntriesResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protowire.MempoolEntry.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MempoolEntry entries = 1;
 * @return {!Array<!proto.protowire.MempoolEntry>}
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.protowire.MempoolEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.MempoolEntry, 1));
};


/**
 * @param {!Array<!proto.protowire.MempoolEntry>} value
 * @return {!proto.protowire.GetMempoolEntriesResponseMessage} returns this
*/
proto.protowire.GetMempoolEntriesResponseMessage.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protowire.MempoolEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.MempoolEntry}
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protowire.MempoolEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetMempoolEntriesResponseMessage} returns this
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetMempoolEntriesResponseMessage} returns this
*/
proto.protowire.GetMempoolEntriesResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetMempoolEntriesResponseMessage} returns this
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetMempoolEntriesResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetConnectedPeerInfoRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetConnectedPeerInfoRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetConnectedPeerInfoRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetConnectedPeerInfoRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetConnectedPeerInfoRequestMessage}
 */
proto.protowire.GetConnectedPeerInfoRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetConnectedPeerInfoRequestMessage;
  return proto.protowire.GetConnectedPeerInfoRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetConnectedPeerInfoRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetConnectedPeerInfoRequestMessage}
 */
proto.protowire.GetConnectedPeerInfoRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetConnectedPeerInfoRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetConnectedPeerInfoRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetConnectedPeerInfoRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetConnectedPeerInfoRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetConnectedPeerInfoResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetConnectedPeerInfoResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.protowire.GetConnectedPeerInfoMessage.toObject, includeInstance),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetConnectedPeerInfoResponseMessage}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetConnectedPeerInfoResponseMessage;
  return proto.protowire.GetConnectedPeerInfoResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetConnectedPeerInfoResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetConnectedPeerInfoResponseMessage}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.GetConnectedPeerInfoMessage;
      reader.readMessage(value,proto.protowire.GetConnectedPeerInfoMessage.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetConnectedPeerInfoResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetConnectedPeerInfoResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protowire.GetConnectedPeerInfoMessage.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetConnectedPeerInfoMessage infos = 1;
 * @return {!Array<!proto.protowire.GetConnectedPeerInfoMessage>}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.protowire.GetConnectedPeerInfoMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.GetConnectedPeerInfoMessage, 1));
};


/**
 * @param {!Array<!proto.protowire.GetConnectedPeerInfoMessage>} value
 * @return {!proto.protowire.GetConnectedPeerInfoResponseMessage} returns this
*/
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protowire.GetConnectedPeerInfoMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetConnectedPeerInfoMessage}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protowire.GetConnectedPeerInfoMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetConnectedPeerInfoResponseMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetConnectedPeerInfoResponseMessage} returns this
*/
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetConnectedPeerInfoResponseMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetConnectedPeerInfoResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetConnectedPeerInfoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetConnectedPeerInfoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetConnectedPeerInfoMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastpingduration: jspb.Message.getFieldWithDefault(msg, 3, 0),
    selectedtiphash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    issyncnode: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isoutbound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    timeoffset: jspb.Message.getFieldWithDefault(msg, 7, 0),
    useragent: jspb.Message.getFieldWithDefault(msg, 8, ""),
    advertisedprotocolversion: jspb.Message.getFieldWithDefault(msg, 9, 0),
    timeconnected: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetConnectedPeerInfoMessage}
 */
proto.protowire.GetConnectedPeerInfoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetConnectedPeerInfoMessage;
  return proto.protowire.GetConnectedPeerInfoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetConnectedPeerInfoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetConnectedPeerInfoMessage}
 */
proto.protowire.GetConnectedPeerInfoMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastpingduration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectedtiphash(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssyncnode(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsoutbound(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeoffset(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseragent(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdvertisedprotocolversion(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeconnected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetConnectedPeerInfoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetConnectedPeerInfoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetConnectedPeerInfoMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastpingduration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSelectedtiphash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIssyncnode();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsoutbound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTimeoffset();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUseragent();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAdvertisedprotocolversion();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getTimeconnected();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 lastPingDuration = 3;
 * @return {number}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getLastpingduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setLastpingduration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string selectedTipHash = 4;
 * @return {string}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getSelectedtiphash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setSelectedtiphash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool isSyncNode = 5;
 * @return {boolean}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getIssyncnode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setIssyncnode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool isOutbound = 6;
 * @return {boolean}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getIsoutbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setIsoutbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional int64 timeOffset = 7;
 * @return {number}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getTimeoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setTimeoffset = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string userAgent = 8;
 * @return {string}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getUseragent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setUseragent = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint32 advertisedProtocolVersion = 9;
 * @return {number}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getAdvertisedprotocolversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setAdvertisedprotocolversion = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 timeConnected = 10;
 * @return {number}
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.getTimeconnected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetConnectedPeerInfoMessage} returns this
 */
proto.protowire.GetConnectedPeerInfoMessage.prototype.setTimeconnected = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.AddPeerRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.AddPeerRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.AddPeerRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AddPeerRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ispermanent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.AddPeerRequestMessage}
 */
proto.protowire.AddPeerRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.AddPeerRequestMessage;
  return proto.protowire.AddPeerRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.AddPeerRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.AddPeerRequestMessage}
 */
proto.protowire.AddPeerRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspermanent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.AddPeerRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.AddPeerRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.AddPeerRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AddPeerRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIspermanent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.protowire.AddPeerRequestMessage.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.AddPeerRequestMessage} returns this
 */
proto.protowire.AddPeerRequestMessage.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isPermanent = 2;
 * @return {boolean}
 */
proto.protowire.AddPeerRequestMessage.prototype.getIspermanent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.AddPeerRequestMessage} returns this
 */
proto.protowire.AddPeerRequestMessage.prototype.setIspermanent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.AddPeerResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.AddPeerResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.AddPeerResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AddPeerResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.AddPeerResponseMessage}
 */
proto.protowire.AddPeerResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.AddPeerResponseMessage;
  return proto.protowire.AddPeerResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.AddPeerResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.AddPeerResponseMessage}
 */
proto.protowire.AddPeerResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.AddPeerResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.AddPeerResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.AddPeerResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AddPeerResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.AddPeerResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.AddPeerResponseMessage} returns this
*/
proto.protowire.AddPeerResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.AddPeerResponseMessage} returns this
 */
proto.protowire.AddPeerResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.AddPeerResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.SubmitTransactionRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.SubmitTransactionRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.SubmitTransactionRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitTransactionRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionhex: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.SubmitTransactionRequestMessage}
 */
proto.protowire.SubmitTransactionRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.SubmitTransactionRequestMessage;
  return proto.protowire.SubmitTransactionRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.SubmitTransactionRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.SubmitTransactionRequestMessage}
 */
proto.protowire.SubmitTransactionRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionhex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.SubmitTransactionRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.SubmitTransactionRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.SubmitTransactionRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitTransactionRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionhex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transactionHex = 1;
 * @return {string}
 */
proto.protowire.SubmitTransactionRequestMessage.prototype.getTransactionhex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.SubmitTransactionRequestMessage} returns this
 */
proto.protowire.SubmitTransactionRequestMessage.prototype.setTransactionhex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.SubmitTransactionResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.SubmitTransactionResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.SubmitTransactionResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitTransactionResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.SubmitTransactionResponseMessage}
 */
proto.protowire.SubmitTransactionResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.SubmitTransactionResponseMessage;
  return proto.protowire.SubmitTransactionResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.SubmitTransactionResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.SubmitTransactionResponseMessage}
 */
proto.protowire.SubmitTransactionResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.SubmitTransactionResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.SubmitTransactionResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.SubmitTransactionResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.SubmitTransactionResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string txId = 1;
 * @return {string}
 */
proto.protowire.SubmitTransactionResponseMessage.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.SubmitTransactionResponseMessage} returns this
 */
proto.protowire.SubmitTransactionResponseMessage.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.SubmitTransactionResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.SubmitTransactionResponseMessage} returns this
*/
proto.protowire.SubmitTransactionResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.SubmitTransactionResponseMessage} returns this
 */
proto.protowire.SubmitTransactionResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.SubmitTransactionResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyChainChangedRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyChainChangedRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyChainChangedRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyChainChangedRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyChainChangedRequestMessage}
 */
proto.protowire.NotifyChainChangedRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyChainChangedRequestMessage;
  return proto.protowire.NotifyChainChangedRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyChainChangedRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyChainChangedRequestMessage}
 */
proto.protowire.NotifyChainChangedRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyChainChangedRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyChainChangedRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyChainChangedRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyChainChangedRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyChainChangedResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyChainChangedResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyChainChangedResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyChainChangedResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyChainChangedResponseMessage}
 */
proto.protowire.NotifyChainChangedResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyChainChangedResponseMessage;
  return proto.protowire.NotifyChainChangedResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyChainChangedResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyChainChangedResponseMessage}
 */
proto.protowire.NotifyChainChangedResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyChainChangedResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyChainChangedResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyChainChangedResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyChainChangedResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.NotifyChainChangedResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.NotifyChainChangedResponseMessage} returns this
*/
proto.protowire.NotifyChainChangedResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.NotifyChainChangedResponseMessage} returns this
 */
proto.protowire.NotifyChainChangedResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.NotifyChainChangedResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.ChainChangedNotificationMessage.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ChainChangedNotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ChainChangedNotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ChainChangedNotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ChainChangedNotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    removedchainblockhashesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    addedchainblocksList: jspb.Message.toObjectList(msg.getAddedchainblocksList(),
    proto.protowire.ChainBlock.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ChainChangedNotificationMessage}
 */
proto.protowire.ChainChangedNotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ChainChangedNotificationMessage;
  return proto.protowire.ChainChangedNotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ChainChangedNotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ChainChangedNotificationMessage}
 */
proto.protowire.ChainChangedNotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemovedchainblockhashes(value);
      break;
    case 2:
      var value = new proto.protowire.ChainBlock;
      reader.readMessage(value,proto.protowire.ChainBlock.deserializeBinaryFromReader);
      msg.addAddedchainblocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ChainChangedNotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ChainChangedNotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ChainChangedNotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ChainChangedNotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemovedchainblockhashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAddedchainblocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protowire.ChainBlock.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string removedChainBlockHashes = 1;
 * @return {!Array<string>}
 */
proto.protowire.ChainChangedNotificationMessage.prototype.getRemovedchainblockhashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.ChainChangedNotificationMessage} returns this
 */
proto.protowire.ChainChangedNotificationMessage.prototype.setRemovedchainblockhashesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.ChainChangedNotificationMessage} returns this
 */
proto.protowire.ChainChangedNotificationMessage.prototype.addRemovedchainblockhashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.ChainChangedNotificationMessage} returns this
 */
proto.protowire.ChainChangedNotificationMessage.prototype.clearRemovedchainblockhashesList = function() {
  return this.setRemovedchainblockhashesList([]);
};


/**
 * repeated ChainBlock addedChainBlocks = 2;
 * @return {!Array<!proto.protowire.ChainBlock>}
 */
proto.protowire.ChainChangedNotificationMessage.prototype.getAddedchainblocksList = function() {
  return /** @type{!Array<!proto.protowire.ChainBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.ChainBlock, 2));
};


/**
 * @param {!Array<!proto.protowire.ChainBlock>} value
 * @return {!proto.protowire.ChainChangedNotificationMessage} returns this
*/
proto.protowire.ChainChangedNotificationMessage.prototype.setAddedchainblocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protowire.ChainBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.ChainBlock}
 */
proto.protowire.ChainChangedNotificationMessage.prototype.addAddedchainblocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protowire.ChainBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.ChainChangedNotificationMessage} returns this
 */
proto.protowire.ChainChangedNotificationMessage.prototype.clearAddedchainblocksList = function() {
  return this.setAddedchainblocksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.ChainBlock.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ChainBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ChainBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ChainBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ChainBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    acceptedblocksList: jspb.Message.toObjectList(msg.getAcceptedblocksList(),
    proto.protowire.AcceptedBlock.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ChainBlock}
 */
proto.protowire.ChainBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ChainBlock;
  return proto.protowire.ChainBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ChainBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ChainBlock}
 */
proto.protowire.ChainBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = new proto.protowire.AcceptedBlock;
      reader.readMessage(value,proto.protowire.AcceptedBlock.deserializeBinaryFromReader);
      msg.addAcceptedblocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ChainBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ChainBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ChainBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ChainBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAcceptedblocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protowire.AcceptedBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.protowire.ChainBlock.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ChainBlock} returns this
 */
proto.protowire.ChainBlock.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated AcceptedBlock acceptedBlocks = 2;
 * @return {!Array<!proto.protowire.AcceptedBlock>}
 */
proto.protowire.ChainBlock.prototype.getAcceptedblocksList = function() {
  return /** @type{!Array<!proto.protowire.AcceptedBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.AcceptedBlock, 2));
};


/**
 * @param {!Array<!proto.protowire.AcceptedBlock>} value
 * @return {!proto.protowire.ChainBlock} returns this
*/
proto.protowire.ChainBlock.prototype.setAcceptedblocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protowire.AcceptedBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.AcceptedBlock}
 */
proto.protowire.ChainBlock.prototype.addAcceptedblocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protowire.AcceptedBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.ChainBlock} returns this
 */
proto.protowire.ChainBlock.prototype.clearAcceptedblocksList = function() {
  return this.setAcceptedblocksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.AcceptedBlock.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.AcceptedBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.AcceptedBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.AcceptedBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AcceptedBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    acceptedtxidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.AcceptedBlock}
 */
proto.protowire.AcceptedBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.AcceptedBlock;
  return proto.protowire.AcceptedBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.AcceptedBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.AcceptedBlock}
 */
proto.protowire.AcceptedBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAcceptedtxids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.AcceptedBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.AcceptedBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.AcceptedBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.AcceptedBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAcceptedtxidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.protowire.AcceptedBlock.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.AcceptedBlock} returns this
 */
proto.protowire.AcceptedBlock.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string acceptedTxIds = 2;
 * @return {!Array<string>}
 */
proto.protowire.AcceptedBlock.prototype.getAcceptedtxidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.AcceptedBlock} returns this
 */
proto.protowire.AcceptedBlock.prototype.setAcceptedtxidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.AcceptedBlock} returns this
 */
proto.protowire.AcceptedBlock.prototype.addAcceptedtxids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.AcceptedBlock} returns this
 */
proto.protowire.AcceptedBlock.prototype.clearAcceptedtxidsList = function() {
  return this.setAcceptedtxidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subnetworkid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    includeblockhex: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includeblockverbosedata: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    includetransactionverbosedata: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockRequestMessage}
 */
proto.protowire.GetBlockRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockRequestMessage;
  return proto.protowire.GetBlockRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockRequestMessage}
 */
proto.protowire.GetBlockRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetworkid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeblockhex(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeblockverbosedata(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludetransactionverbosedata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubnetworkid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludeblockhex();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeblockverbosedata();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIncludetransactionverbosedata();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.protowire.GetBlockRequestMessage.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockRequestMessage} returns this
 */
proto.protowire.GetBlockRequestMessage.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subnetworkId = 2;
 * @return {string}
 */
proto.protowire.GetBlockRequestMessage.prototype.getSubnetworkid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockRequestMessage} returns this
 */
proto.protowire.GetBlockRequestMessage.prototype.setSubnetworkid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool includeBlockHex = 3;
 * @return {boolean}
 */
proto.protowire.GetBlockRequestMessage.prototype.getIncludeblockhex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlockRequestMessage} returns this
 */
proto.protowire.GetBlockRequestMessage.prototype.setIncludeblockhex = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool includeBlockVerboseData = 4;
 * @return {boolean}
 */
proto.protowire.GetBlockRequestMessage.prototype.getIncludeblockverbosedata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlockRequestMessage} returns this
 */
proto.protowire.GetBlockRequestMessage.prototype.setIncludeblockverbosedata = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool includeTransactionVerboseData = 5;
 * @return {boolean}
 */
proto.protowire.GetBlockRequestMessage.prototype.getIncludetransactionverbosedata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlockRequestMessage} returns this
 */
proto.protowire.GetBlockRequestMessage.prototype.setIncludetransactionverbosedata = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockhash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockhex: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockverbosedata: (f = msg.getBlockverbosedata()) && proto.protowire.BlockVerboseData.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockResponseMessage}
 */
proto.protowire.GetBlockResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockResponseMessage;
  return proto.protowire.GetBlockResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockResponseMessage}
 */
proto.protowire.GetBlockResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockhash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockhex(value);
      break;
    case 3:
      var value = new proto.protowire.BlockVerboseData;
      reader.readMessage(value,proto.protowire.BlockVerboseData.deserializeBinaryFromReader);
      msg.setBlockverbosedata(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockhex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockverbosedata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protowire.BlockVerboseData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string blockHash = 1;
 * @return {string}
 */
proto.protowire.GetBlockResponseMessage.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockResponseMessage} returns this
 */
proto.protowire.GetBlockResponseMessage.prototype.setBlockhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blockHex = 2;
 * @return {string}
 */
proto.protowire.GetBlockResponseMessage.prototype.getBlockhex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockResponseMessage} returns this
 */
proto.protowire.GetBlockResponseMessage.prototype.setBlockhex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BlockVerboseData blockVerboseData = 3;
 * @return {?proto.protowire.BlockVerboseData}
 */
proto.protowire.GetBlockResponseMessage.prototype.getBlockverbosedata = function() {
  return /** @type{?proto.protowire.BlockVerboseData} */ (
    jspb.Message.getWrapperField(this, proto.protowire.BlockVerboseData, 3));
};


/**
 * @param {?proto.protowire.BlockVerboseData|undefined} value
 * @return {!proto.protowire.GetBlockResponseMessage} returns this
*/
proto.protowire.GetBlockResponseMessage.prototype.setBlockverbosedata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetBlockResponseMessage} returns this
 */
proto.protowire.GetBlockResponseMessage.prototype.clearBlockverbosedata = function() {
  return this.setBlockverbosedata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetBlockResponseMessage.prototype.hasBlockverbosedata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetBlockResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetBlockResponseMessage} returns this
*/
proto.protowire.GetBlockResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetBlockResponseMessage} returns this
 */
proto.protowire.GetBlockResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetBlockResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.BlockVerboseData.repeatedFields_ = [11,12,17,19,20];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.BlockVerboseData.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.BlockVerboseData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.BlockVerboseData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockVerboseData.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    confirmations: jspb.Message.getFieldWithDefault(msg, 2, 0),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bluescore: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ischainblock: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    version: jspb.Message.getFieldWithDefault(msg, 6, 0),
    versionhex: jspb.Message.getFieldWithDefault(msg, 7, ""),
    hashmerkleroot: jspb.Message.getFieldWithDefault(msg, 8, ""),
    acceptedidmerkleroot: jspb.Message.getFieldWithDefault(msg, 9, ""),
    utxocommitment: jspb.Message.getFieldWithDefault(msg, 10, ""),
    transactionhexList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    transactionverbosedataList: jspb.Message.toObjectList(msg.getTransactionverbosedataList(),
    proto.protowire.TransactionVerboseData.toObject, includeInstance),
    time: jspb.Message.getFieldWithDefault(msg, 13, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 14, 0),
    bits: jspb.Message.getFieldWithDefault(msg, 15, ""),
    difficulty: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    parenthashesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    selectedparenthash: jspb.Message.getFieldWithDefault(msg, 18, ""),
    childhashesList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
    acceptedblockhashesList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.BlockVerboseData}
 */
proto.protowire.BlockVerboseData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.BlockVerboseData;
  return proto.protowire.BlockVerboseData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.BlockVerboseData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.BlockVerboseData}
 */
proto.protowire.BlockVerboseData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConfirmations(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBluescore(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIschainblock(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionhex(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHashmerkleroot(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcceptedidmerkleroot(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUtxocommitment(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addTransactionhex(value);
      break;
    case 12:
      var value = new proto.protowire.TransactionVerboseData;
      reader.readMessage(value,proto.protowire.TransactionVerboseData.deserializeBinaryFromReader);
      msg.addTransactionverbosedata(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setBits(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDifficulty(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addParenthashes(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectedparenthash(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addChildhashes(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addAcceptedblockhashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.BlockVerboseData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.BlockVerboseData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.BlockVerboseData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.BlockVerboseData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfirmations();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBluescore();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getIschainblock();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getVersionhex();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHashmerkleroot();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAcceptedidmerkleroot();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUtxocommitment();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTransactionhexList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getTransactionverbosedataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.protowire.TransactionVerboseData.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getBits();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getDifficulty();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getParenthashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getSelectedparenthash();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getChildhashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
  f = message.getAcceptedblockhashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.protowire.BlockVerboseData.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 confirmations = 2;
 * @return {number}
 */
proto.protowire.BlockVerboseData.prototype.getConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 size = 3;
 * @return {number}
 */
proto.protowire.BlockVerboseData.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 blueScore = 4;
 * @return {number}
 */
proto.protowire.BlockVerboseData.prototype.getBluescore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setBluescore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool isChainBlock = 5;
 * @return {boolean}
 */
proto.protowire.BlockVerboseData.prototype.getIschainblock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setIschainblock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 version = 6;
 * @return {number}
 */
proto.protowire.BlockVerboseData.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string versionHex = 7;
 * @return {string}
 */
proto.protowire.BlockVerboseData.prototype.getVersionhex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setVersionhex = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string hashMerkleRoot = 8;
 * @return {string}
 */
proto.protowire.BlockVerboseData.prototype.getHashmerkleroot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setHashmerkleroot = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string acceptedIDMerkleRoot = 9;
 * @return {string}
 */
proto.protowire.BlockVerboseData.prototype.getAcceptedidmerkleroot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setAcceptedidmerkleroot = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string utxoCommitment = 10;
 * @return {string}
 */
proto.protowire.BlockVerboseData.prototype.getUtxocommitment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setUtxocommitment = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string transactionHex = 11;
 * @return {!Array<string>}
 */
proto.protowire.BlockVerboseData.prototype.getTransactionhexList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setTransactionhexList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.addTransactionhex = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.clearTransactionhexList = function() {
  return this.setTransactionhexList([]);
};


/**
 * repeated TransactionVerboseData transactionVerboseData = 12;
 * @return {!Array<!proto.protowire.TransactionVerboseData>}
 */
proto.protowire.BlockVerboseData.prototype.getTransactionverbosedataList = function() {
  return /** @type{!Array<!proto.protowire.TransactionVerboseData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionVerboseData, 12));
};


/**
 * @param {!Array<!proto.protowire.TransactionVerboseData>} value
 * @return {!proto.protowire.BlockVerboseData} returns this
*/
proto.protowire.BlockVerboseData.prototype.setTransactionverbosedataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.protowire.TransactionVerboseData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionVerboseData}
 */
proto.protowire.BlockVerboseData.prototype.addTransactionverbosedata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.protowire.TransactionVerboseData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.clearTransactionverbosedataList = function() {
  return this.setTransactionverbosedataList([]);
};


/**
 * optional int64 time = 13;
 * @return {number}
 */
proto.protowire.BlockVerboseData.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 nonce = 14;
 * @return {number}
 */
proto.protowire.BlockVerboseData.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string bits = 15;
 * @return {string}
 */
proto.protowire.BlockVerboseData.prototype.getBits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setBits = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional double difficulty = 16;
 * @return {number}
 */
proto.protowire.BlockVerboseData.prototype.getDifficulty = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setDifficulty = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * repeated string parentHashes = 17;
 * @return {!Array<string>}
 */
proto.protowire.BlockVerboseData.prototype.getParenthashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setParenthashesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.addParenthashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.clearParenthashesList = function() {
  return this.setParenthashesList([]);
};


/**
 * optional string selectedParentHash = 18;
 * @return {string}
 */
proto.protowire.BlockVerboseData.prototype.getSelectedparenthash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setSelectedparenthash = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * repeated string childHashes = 19;
 * @return {!Array<string>}
 */
proto.protowire.BlockVerboseData.prototype.getChildhashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setChildhashesList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.addChildhashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.clearChildhashesList = function() {
  return this.setChildhashesList([]);
};


/**
 * repeated string acceptedBlockHashes = 20;
 * @return {!Array<string>}
 */
proto.protowire.BlockVerboseData.prototype.getAcceptedblockhashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.setAcceptedblockhashesList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.addAcceptedblockhashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.BlockVerboseData} returns this
 */
proto.protowire.BlockVerboseData.prototype.clearAcceptedblockhashesList = function() {
  return this.setAcceptedblockhashesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.TransactionVerboseData.repeatedFields_ = [11,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionVerboseData.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionVerboseData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionVerboseData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionVerboseData.toObject = function(includeInstance, msg) {
  var f, obj = {
    hex: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    version: jspb.Message.getFieldWithDefault(msg, 5, 0),
    locktime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    subnetworkid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    gas: jspb.Message.getFieldWithDefault(msg, 8, 0),
    payloadhash: jspb.Message.getFieldWithDefault(msg, 9, ""),
    payload: jspb.Message.getFieldWithDefault(msg, 10, ""),
    transactionverboseinputsList: jspb.Message.toObjectList(msg.getTransactionverboseinputsList(),
    proto.protowire.TransactionVerboseInput.toObject, includeInstance),
    transactionverboseoutputsList: jspb.Message.toObjectList(msg.getTransactionverboseoutputsList(),
    proto.protowire.TransactionVerboseOutput.toObject, includeInstance),
    blockhash: jspb.Message.getFieldWithDefault(msg, 13, ""),
    acceptedby: jspb.Message.getFieldWithDefault(msg, 14, ""),
    isinmempool: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    time: jspb.Message.getFieldWithDefault(msg, 16, 0),
    blocktime: jspb.Message.getFieldWithDefault(msg, 17, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionVerboseData}
 */
proto.protowire.TransactionVerboseData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionVerboseData;
  return proto.protowire.TransactionVerboseData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionVerboseData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionVerboseData}
 */
proto.protowire.TransactionVerboseData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLocktime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetworkid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGas(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayloadhash(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    case 11:
      var value = new proto.protowire.TransactionVerboseInput;
      reader.readMessage(value,proto.protowire.TransactionVerboseInput.deserializeBinaryFromReader);
      msg.addTransactionverboseinputs(value);
      break;
    case 12:
      var value = new proto.protowire.TransactionVerboseOutput;
      reader.readMessage(value,proto.protowire.TransactionVerboseOutput.deserializeBinaryFromReader);
      msg.addTransactionverboseoutputs(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockhash(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcceptedby(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsinmempool(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlocktime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionVerboseData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionVerboseData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionVerboseData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionVerboseData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLocktime();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getSubnetworkid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getGas();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getPayloadhash();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTransactionverboseinputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.protowire.TransactionVerboseInput.serializeBinaryToWriter
    );
  }
  f = message.getTransactionverboseoutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.protowire.TransactionVerboseOutput.serializeBinaryToWriter
    );
  }
  f = message.getBlockhash();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAcceptedby();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getIsinmempool();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getBlocktime();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
};


/**
 * optional string hex = 1;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getHex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setHex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string txId = 2;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string hash = 3;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 size = 4;
 * @return {number}
 */
proto.protowire.TransactionVerboseData.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 version = 5;
 * @return {number}
 */
proto.protowire.TransactionVerboseData.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 lockTime = 6;
 * @return {number}
 */
proto.protowire.TransactionVerboseData.prototype.getLocktime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setLocktime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string subnetworkId = 7;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getSubnetworkid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setSubnetworkid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 gas = 8;
 * @return {number}
 */
proto.protowire.TransactionVerboseData.prototype.getGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setGas = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string payloadHash = 9;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getPayloadhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setPayloadhash = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string payload = 10;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated TransactionVerboseInput transactionVerboseInputs = 11;
 * @return {!Array<!proto.protowire.TransactionVerboseInput>}
 */
proto.protowire.TransactionVerboseData.prototype.getTransactionverboseinputsList = function() {
  return /** @type{!Array<!proto.protowire.TransactionVerboseInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionVerboseInput, 11));
};


/**
 * @param {!Array<!proto.protowire.TransactionVerboseInput>} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
*/
proto.protowire.TransactionVerboseData.prototype.setTransactionverboseinputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.protowire.TransactionVerboseInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionVerboseInput}
 */
proto.protowire.TransactionVerboseData.prototype.addTransactionverboseinputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.protowire.TransactionVerboseInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.clearTransactionverboseinputsList = function() {
  return this.setTransactionverboseinputsList([]);
};


/**
 * repeated TransactionVerboseOutput transactionVerboseOutputs = 12;
 * @return {!Array<!proto.protowire.TransactionVerboseOutput>}
 */
proto.protowire.TransactionVerboseData.prototype.getTransactionverboseoutputsList = function() {
  return /** @type{!Array<!proto.protowire.TransactionVerboseOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.TransactionVerboseOutput, 12));
};


/**
 * @param {!Array<!proto.protowire.TransactionVerboseOutput>} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
*/
proto.protowire.TransactionVerboseData.prototype.setTransactionverboseoutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.protowire.TransactionVerboseOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.TransactionVerboseOutput}
 */
proto.protowire.TransactionVerboseData.prototype.addTransactionverboseoutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.protowire.TransactionVerboseOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.clearTransactionverboseoutputsList = function() {
  return this.setTransactionverboseoutputsList([]);
};


/**
 * optional string blockHash = 13;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setBlockhash = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string acceptedBy = 14;
 * @return {string}
 */
proto.protowire.TransactionVerboseData.prototype.getAcceptedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setAcceptedby = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool isInMempool = 15;
 * @return {boolean}
 */
proto.protowire.TransactionVerboseData.prototype.getIsinmempool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setIsinmempool = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional uint64 time = 16;
 * @return {number}
 */
proto.protowire.TransactionVerboseData.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint64 blockTime = 17;
 * @return {number}
 */
proto.protowire.TransactionVerboseData.prototype.getBlocktime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseData} returns this
 */
proto.protowire.TransactionVerboseData.prototype.setBlocktime = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionVerboseInput.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionVerboseInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionVerboseInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionVerboseInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputindex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    scriptsig: (f = msg.getScriptsig()) && proto.protowire.ScriptSig.toObject(includeInstance, f),
    sequence: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionVerboseInput}
 */
proto.protowire.TransactionVerboseInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionVerboseInput;
  return proto.protowire.TransactionVerboseInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionVerboseInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionVerboseInput}
 */
proto.protowire.TransactionVerboseInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutputindex(value);
      break;
    case 3:
      var value = new proto.protowire.ScriptSig;
      reader.readMessage(value,proto.protowire.ScriptSig.deserializeBinaryFromReader);
      msg.setScriptsig(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionVerboseInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionVerboseInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionVerboseInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionVerboseInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputindex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getScriptsig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protowire.ScriptSig.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string txId = 1;
 * @return {string}
 */
proto.protowire.TransactionVerboseInput.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.TransactionVerboseInput} returns this
 */
proto.protowire.TransactionVerboseInput.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 outputIndex = 2;
 * @return {number}
 */
proto.protowire.TransactionVerboseInput.prototype.getOutputindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseInput} returns this
 */
proto.protowire.TransactionVerboseInput.prototype.setOutputindex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ScriptSig scriptSig = 3;
 * @return {?proto.protowire.ScriptSig}
 */
proto.protowire.TransactionVerboseInput.prototype.getScriptsig = function() {
  return /** @type{?proto.protowire.ScriptSig} */ (
    jspb.Message.getWrapperField(this, proto.protowire.ScriptSig, 3));
};


/**
 * @param {?proto.protowire.ScriptSig|undefined} value
 * @return {!proto.protowire.TransactionVerboseInput} returns this
*/
proto.protowire.TransactionVerboseInput.prototype.setScriptsig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.TransactionVerboseInput} returns this
 */
proto.protowire.TransactionVerboseInput.prototype.clearScriptsig = function() {
  return this.setScriptsig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.TransactionVerboseInput.prototype.hasScriptsig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 sequence = 4;
 * @return {number}
 */
proto.protowire.TransactionVerboseInput.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseInput} returns this
 */
proto.protowire.TransactionVerboseInput.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ScriptSig.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ScriptSig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ScriptSig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ScriptSig.toObject = function(includeInstance, msg) {
  var f, obj = {
    asm: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hex: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ScriptSig}
 */
proto.protowire.ScriptSig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ScriptSig;
  return proto.protowire.ScriptSig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ScriptSig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ScriptSig}
 */
proto.protowire.ScriptSig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsm(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ScriptSig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ScriptSig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ScriptSig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ScriptSig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsm();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string asm = 1;
 * @return {string}
 */
proto.protowire.ScriptSig.prototype.getAsm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ScriptSig} returns this
 */
proto.protowire.ScriptSig.prototype.setAsm = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string hex = 2;
 * @return {string}
 */
proto.protowire.ScriptSig.prototype.getHex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ScriptSig} returns this
 */
proto.protowire.ScriptSig.prototype.setHex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionVerboseOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionVerboseOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionVerboseOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionVerboseOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    scriptpubkey: (f = msg.getScriptpubkey()) && proto.protowire.ScriptPubKeyResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionVerboseOutput}
 */
proto.protowire.TransactionVerboseOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionVerboseOutput;
  return proto.protowire.TransactionVerboseOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionVerboseOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionVerboseOutput}
 */
proto.protowire.TransactionVerboseOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 3:
      var value = new proto.protowire.ScriptPubKeyResult;
      reader.readMessage(value,proto.protowire.ScriptPubKeyResult.deserializeBinaryFromReader);
      msg.setScriptpubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionVerboseOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionVerboseOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionVerboseOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionVerboseOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getScriptpubkey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protowire.ScriptPubKeyResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 value = 1;
 * @return {number}
 */
proto.protowire.TransactionVerboseOutput.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseOutput} returns this
 */
proto.protowire.TransactionVerboseOutput.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.protowire.TransactionVerboseOutput.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.TransactionVerboseOutput} returns this
 */
proto.protowire.TransactionVerboseOutput.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ScriptPubKeyResult scriptPubKey = 3;
 * @return {?proto.protowire.ScriptPubKeyResult}
 */
proto.protowire.TransactionVerboseOutput.prototype.getScriptpubkey = function() {
  return /** @type{?proto.protowire.ScriptPubKeyResult} */ (
    jspb.Message.getWrapperField(this, proto.protowire.ScriptPubKeyResult, 3));
};


/**
 * @param {?proto.protowire.ScriptPubKeyResult|undefined} value
 * @return {!proto.protowire.TransactionVerboseOutput} returns this
*/
proto.protowire.TransactionVerboseOutput.prototype.setScriptpubkey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.TransactionVerboseOutput} returns this
 */
proto.protowire.TransactionVerboseOutput.prototype.clearScriptpubkey = function() {
  return this.setScriptpubkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.TransactionVerboseOutput.prototype.hasScriptpubkey = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ScriptPubKeyResult.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ScriptPubKeyResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ScriptPubKeyResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ScriptPubKeyResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    asm: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hex: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ScriptPubKeyResult}
 */
proto.protowire.ScriptPubKeyResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ScriptPubKeyResult;
  return proto.protowire.ScriptPubKeyResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ScriptPubKeyResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ScriptPubKeyResult}
 */
proto.protowire.ScriptPubKeyResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsm(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ScriptPubKeyResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ScriptPubKeyResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ScriptPubKeyResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ScriptPubKeyResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsm();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string asm = 1;
 * @return {string}
 */
proto.protowire.ScriptPubKeyResult.prototype.getAsm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ScriptPubKeyResult} returns this
 */
proto.protowire.ScriptPubKeyResult.prototype.setAsm = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string hex = 2;
 * @return {string}
 */
proto.protowire.ScriptPubKeyResult.prototype.getHex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ScriptPubKeyResult} returns this
 */
proto.protowire.ScriptPubKeyResult.prototype.setHex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.protowire.ScriptPubKeyResult.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ScriptPubKeyResult} returns this
 */
proto.protowire.ScriptPubKeyResult.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.protowire.ScriptPubKeyResult.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ScriptPubKeyResult} returns this
 */
proto.protowire.ScriptPubKeyResult.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetSubnetworkRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetSubnetworkRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetSubnetworkRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSubnetworkRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    subnetworkid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetSubnetworkRequestMessage}
 */
proto.protowire.GetSubnetworkRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetSubnetworkRequestMessage;
  return proto.protowire.GetSubnetworkRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetSubnetworkRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetSubnetworkRequestMessage}
 */
proto.protowire.GetSubnetworkRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetworkid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetSubnetworkRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetSubnetworkRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetSubnetworkRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSubnetworkRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubnetworkid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string subnetworkId = 1;
 * @return {string}
 */
proto.protowire.GetSubnetworkRequestMessage.prototype.getSubnetworkid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetSubnetworkRequestMessage} returns this
 */
proto.protowire.GetSubnetworkRequestMessage.prototype.setSubnetworkid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetSubnetworkResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetSubnetworkResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetSubnetworkResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSubnetworkResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    gaslimit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetSubnetworkResponseMessage}
 */
proto.protowire.GetSubnetworkResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetSubnetworkResponseMessage;
  return proto.protowire.GetSubnetworkResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetSubnetworkResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetSubnetworkResponseMessage}
 */
proto.protowire.GetSubnetworkResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGaslimit(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetSubnetworkResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetSubnetworkResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetSubnetworkResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetSubnetworkResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGaslimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 gasLimit = 1;
 * @return {number}
 */
proto.protowire.GetSubnetworkResponseMessage.prototype.getGaslimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetSubnetworkResponseMessage} returns this
 */
proto.protowire.GetSubnetworkResponseMessage.prototype.setGaslimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetSubnetworkResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetSubnetworkResponseMessage} returns this
*/
proto.protowire.GetSubnetworkResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetSubnetworkResponseMessage} returns this
 */
proto.protowire.GetSubnetworkResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetSubnetworkResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetChainFromBlockRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetChainFromBlockRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetChainFromBlockRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetChainFromBlockRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    starthash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeblockverbosedata: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetChainFromBlockRequestMessage}
 */
proto.protowire.GetChainFromBlockRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetChainFromBlockRequestMessage;
  return proto.protowire.GetChainFromBlockRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetChainFromBlockRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetChainFromBlockRequestMessage}
 */
proto.protowire.GetChainFromBlockRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStarthash(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeblockverbosedata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetChainFromBlockRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetChainFromBlockRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetChainFromBlockRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetChainFromBlockRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarthash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeblockverbosedata();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string startHash = 1;
 * @return {string}
 */
proto.protowire.GetChainFromBlockRequestMessage.prototype.getStarthash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetChainFromBlockRequestMessage} returns this
 */
proto.protowire.GetChainFromBlockRequestMessage.prototype.setStarthash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool includeBlockVerboseData = 2;
 * @return {boolean}
 */
proto.protowire.GetChainFromBlockRequestMessage.prototype.getIncludeblockverbosedata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetChainFromBlockRequestMessage} returns this
 */
proto.protowire.GetChainFromBlockRequestMessage.prototype.setIncludeblockverbosedata = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetChainFromBlockResponseMessage.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetChainFromBlockResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetChainFromBlockResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetChainFromBlockResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    removedchainblockhashesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    addedchainblocksList: jspb.Message.toObjectList(msg.getAddedchainblocksList(),
    proto.protowire.ChainBlock.toObject, includeInstance),
    blockverbosedataList: jspb.Message.toObjectList(msg.getBlockverbosedataList(),
    proto.protowire.BlockVerboseData.toObject, includeInstance),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetChainFromBlockResponseMessage}
 */
proto.protowire.GetChainFromBlockResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetChainFromBlockResponseMessage;
  return proto.protowire.GetChainFromBlockResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetChainFromBlockResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetChainFromBlockResponseMessage}
 */
proto.protowire.GetChainFromBlockResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemovedchainblockhashes(value);
      break;
    case 2:
      var value = new proto.protowire.ChainBlock;
      reader.readMessage(value,proto.protowire.ChainBlock.deserializeBinaryFromReader);
      msg.addAddedchainblocks(value);
      break;
    case 3:
      var value = new proto.protowire.BlockVerboseData;
      reader.readMessage(value,proto.protowire.BlockVerboseData.deserializeBinaryFromReader);
      msg.addBlockverbosedata(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetChainFromBlockResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetChainFromBlockResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetChainFromBlockResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemovedchainblockhashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAddedchainblocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protowire.ChainBlock.serializeBinaryToWriter
    );
  }
  f = message.getBlockverbosedataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protowire.BlockVerboseData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string removedChainBlockHashes = 1;
 * @return {!Array<string>}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.getRemovedchainblockhashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.setRemovedchainblockhashesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.addRemovedchainblockhashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.clearRemovedchainblockhashesList = function() {
  return this.setRemovedchainblockhashesList([]);
};


/**
 * repeated ChainBlock addedChainBlocks = 2;
 * @return {!Array<!proto.protowire.ChainBlock>}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.getAddedchainblocksList = function() {
  return /** @type{!Array<!proto.protowire.ChainBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.ChainBlock, 2));
};


/**
 * @param {!Array<!proto.protowire.ChainBlock>} value
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
*/
proto.protowire.GetChainFromBlockResponseMessage.prototype.setAddedchainblocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protowire.ChainBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.ChainBlock}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.addAddedchainblocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protowire.ChainBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.clearAddedchainblocksList = function() {
  return this.setAddedchainblocksList([]);
};


/**
 * repeated BlockVerboseData blockVerboseData = 3;
 * @return {!Array<!proto.protowire.BlockVerboseData>}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.getBlockverbosedataList = function() {
  return /** @type{!Array<!proto.protowire.BlockVerboseData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.BlockVerboseData, 3));
};


/**
 * @param {!Array<!proto.protowire.BlockVerboseData>} value
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
*/
proto.protowire.GetChainFromBlockResponseMessage.prototype.setBlockverbosedataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protowire.BlockVerboseData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.BlockVerboseData}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.addBlockverbosedata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protowire.BlockVerboseData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.clearBlockverbosedataList = function() {
  return this.setBlockverbosedataList([]);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
*/
proto.protowire.GetChainFromBlockResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetChainFromBlockResponseMessage} returns this
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetChainFromBlockResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlocksRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlocksRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlocksRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlocksRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    lowhash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeblockhexes: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    includeblockverbosedata: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includetransactionverbosedata: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlocksRequestMessage}
 */
proto.protowire.GetBlocksRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlocksRequestMessage;
  return proto.protowire.GetBlocksRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlocksRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlocksRequestMessage}
 */
proto.protowire.GetBlocksRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLowhash(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeblockhexes(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeblockverbosedata(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludetransactionverbosedata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlocksRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlocksRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlocksRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlocksRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLowhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeblockhexes();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIncludeblockverbosedata();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludetransactionverbosedata();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string lowHash = 1;
 * @return {string}
 */
proto.protowire.GetBlocksRequestMessage.prototype.getLowhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlocksRequestMessage} returns this
 */
proto.protowire.GetBlocksRequestMessage.prototype.setLowhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool includeBlockHexes = 2;
 * @return {boolean}
 */
proto.protowire.GetBlocksRequestMessage.prototype.getIncludeblockhexes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlocksRequestMessage} returns this
 */
proto.protowire.GetBlocksRequestMessage.prototype.setIncludeblockhexes = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool includeBlockVerboseData = 3;
 * @return {boolean}
 */
proto.protowire.GetBlocksRequestMessage.prototype.getIncludeblockverbosedata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlocksRequestMessage} returns this
 */
proto.protowire.GetBlocksRequestMessage.prototype.setIncludeblockverbosedata = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool includeTransactionVerboseData = 4;
 * @return {boolean}
 */
proto.protowire.GetBlocksRequestMessage.prototype.getIncludetransactionverbosedata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetBlocksRequestMessage} returns this
 */
proto.protowire.GetBlocksRequestMessage.prototype.setIncludetransactionverbosedata = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetBlocksResponseMessage.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlocksResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlocksResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlocksResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlocksResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockhashesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    blockhexesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    blockverbosedataList: jspb.Message.toObjectList(msg.getBlockverbosedataList(),
    proto.protowire.BlockVerboseData.toObject, includeInstance),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlocksResponseMessage}
 */
proto.protowire.GetBlocksResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlocksResponseMessage;
  return proto.protowire.GetBlocksResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlocksResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlocksResponseMessage}
 */
proto.protowire.GetBlocksResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlockhashes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlockhexes(value);
      break;
    case 3:
      var value = new proto.protowire.BlockVerboseData;
      reader.readMessage(value,proto.protowire.BlockVerboseData.deserializeBinaryFromReader);
      msg.addBlockverbosedata(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlocksResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlocksResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlocksResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlocksResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockhashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getBlockhexesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getBlockverbosedataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protowire.BlockVerboseData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string blockHashes = 1;
 * @return {!Array<string>}
 */
proto.protowire.GetBlocksResponseMessage.prototype.getBlockhashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.setBlockhashesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.addBlockhashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.clearBlockhashesList = function() {
  return this.setBlockhashesList([]);
};


/**
 * repeated string blockHexes = 2;
 * @return {!Array<string>}
 */
proto.protowire.GetBlocksResponseMessage.prototype.getBlockhexesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.setBlockhexesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.addBlockhexes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.clearBlockhexesList = function() {
  return this.setBlockhexesList([]);
};


/**
 * repeated BlockVerboseData blockVerboseData = 3;
 * @return {!Array<!proto.protowire.BlockVerboseData>}
 */
proto.protowire.GetBlocksResponseMessage.prototype.getBlockverbosedataList = function() {
  return /** @type{!Array<!proto.protowire.BlockVerboseData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protowire.BlockVerboseData, 3));
};


/**
 * @param {!Array<!proto.protowire.BlockVerboseData>} value
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
*/
proto.protowire.GetBlocksResponseMessage.prototype.setBlockverbosedataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protowire.BlockVerboseData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protowire.BlockVerboseData}
 */
proto.protowire.GetBlocksResponseMessage.prototype.addBlockverbosedata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protowire.BlockVerboseData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.clearBlockverbosedataList = function() {
  return this.setBlockverbosedataList([]);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetBlocksResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
*/
proto.protowire.GetBlocksResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetBlocksResponseMessage} returns this
 */
proto.protowire.GetBlocksResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetBlocksResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockCountRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockCountRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockCountRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockCountRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockCountRequestMessage}
 */
proto.protowire.GetBlockCountRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockCountRequestMessage;
  return proto.protowire.GetBlockCountRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockCountRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockCountRequestMessage}
 */
proto.protowire.GetBlockCountRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockCountRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockCountRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockCountRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockCountRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockCountResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockCountResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockCountResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockCountResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockCountResponseMessage}
 */
proto.protowire.GetBlockCountResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockCountResponseMessage;
  return proto.protowire.GetBlockCountResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockCountResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockCountResponseMessage}
 */
proto.protowire.GetBlockCountResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockcount(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockCountResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockCountResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockCountResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockCountResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockcount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 blockCount = 1;
 * @return {number}
 */
proto.protowire.GetBlockCountResponseMessage.prototype.getBlockcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockCountResponseMessage} returns this
 */
proto.protowire.GetBlockCountResponseMessage.prototype.setBlockcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetBlockCountResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetBlockCountResponseMessage} returns this
*/
proto.protowire.GetBlockCountResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetBlockCountResponseMessage} returns this
 */
proto.protowire.GetBlockCountResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetBlockCountResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockDagInfoRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockDagInfoRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockDagInfoRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockDagInfoRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockDagInfoRequestMessage}
 */
proto.protowire.GetBlockDagInfoRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockDagInfoRequestMessage;
  return proto.protowire.GetBlockDagInfoRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockDagInfoRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockDagInfoRequestMessage}
 */
proto.protowire.GetBlockDagInfoRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockDagInfoRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockDagInfoRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockDagInfoRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockDagInfoRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetBlockDagInfoResponseMessage.repeatedFields_ = [3,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetBlockDagInfoResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetBlockDagInfoResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockDagInfoResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockcount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tiphashesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    difficulty: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    pastmediantime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    virtualparenthashesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage}
 */
proto.protowire.GetBlockDagInfoResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetBlockDagInfoResponseMessage;
  return proto.protowire.GetBlockDagInfoResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetBlockDagInfoResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage}
 */
proto.protowire.GetBlockDagInfoResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkname(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockcount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTiphashes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDifficulty(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPastmediantime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addVirtualparenthashes(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetBlockDagInfoResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetBlockDagInfoResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetBlockDagInfoResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockcount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTiphashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDifficulty();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPastmediantime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getVirtualparenthashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string networkName = 1;
 * @return {string}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.getNetworkname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.setNetworkname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 blockCount = 2;
 * @return {number}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.getBlockcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.setBlockcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string tipHashes = 3;
 * @return {!Array<string>}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.getTiphashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.setTiphashesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.addTiphashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.clearTiphashesList = function() {
  return this.setTiphashesList([]);
};


/**
 * optional double difficulty = 4;
 * @return {number}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.getDifficulty = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.setDifficulty = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int64 pastMedianTime = 5;
 * @return {number}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.getPastmediantime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.setPastmediantime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string virtualParentHashes = 6;
 * @return {!Array<string>}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.getVirtualparenthashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.setVirtualparenthashesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.addVirtualparenthashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.clearVirtualparenthashesList = function() {
  return this.setVirtualparenthashesList([]);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
*/
proto.protowire.GetBlockDagInfoResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetBlockDagInfoResponseMessage} returns this
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetBlockDagInfoResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ResolveFinalityConflictRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ResolveFinalityConflictRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ResolveFinalityConflictRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ResolveFinalityConflictRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    finalityblockhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ResolveFinalityConflictRequestMessage}
 */
proto.protowire.ResolveFinalityConflictRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ResolveFinalityConflictRequestMessage;
  return proto.protowire.ResolveFinalityConflictRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ResolveFinalityConflictRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ResolveFinalityConflictRequestMessage}
 */
proto.protowire.ResolveFinalityConflictRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinalityblockhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ResolveFinalityConflictRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ResolveFinalityConflictRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ResolveFinalityConflictRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ResolveFinalityConflictRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinalityblockhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string finalityBlockHash = 1;
 * @return {string}
 */
proto.protowire.ResolveFinalityConflictRequestMessage.prototype.getFinalityblockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.ResolveFinalityConflictRequestMessage} returns this
 */
proto.protowire.ResolveFinalityConflictRequestMessage.prototype.setFinalityblockhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ResolveFinalityConflictResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ResolveFinalityConflictResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ResolveFinalityConflictResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ResolveFinalityConflictResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ResolveFinalityConflictResponseMessage}
 */
proto.protowire.ResolveFinalityConflictResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ResolveFinalityConflictResponseMessage;
  return proto.protowire.ResolveFinalityConflictResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ResolveFinalityConflictResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ResolveFinalityConflictResponseMessage}
 */
proto.protowire.ResolveFinalityConflictResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ResolveFinalityConflictResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ResolveFinalityConflictResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ResolveFinalityConflictResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ResolveFinalityConflictResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.ResolveFinalityConflictResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.ResolveFinalityConflictResponseMessage} returns this
*/
proto.protowire.ResolveFinalityConflictResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.ResolveFinalityConflictResponseMessage} returns this
 */
proto.protowire.ResolveFinalityConflictResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.ResolveFinalityConflictResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyFinalityConflictsRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyFinalityConflictsRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyFinalityConflictsRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyFinalityConflictsRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyFinalityConflictsRequestMessage}
 */
proto.protowire.NotifyFinalityConflictsRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyFinalityConflictsRequestMessage;
  return proto.protowire.NotifyFinalityConflictsRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyFinalityConflictsRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyFinalityConflictsRequestMessage}
 */
proto.protowire.NotifyFinalityConflictsRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyFinalityConflictsRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyFinalityConflictsRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyFinalityConflictsRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyFinalityConflictsRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyFinalityConflictsResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyFinalityConflictsResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyFinalityConflictsResponseMessage}
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyFinalityConflictsResponseMessage;
  return proto.protowire.NotifyFinalityConflictsResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyFinalityConflictsResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyFinalityConflictsResponseMessage}
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyFinalityConflictsResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyFinalityConflictsResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.NotifyFinalityConflictsResponseMessage} returns this
*/
proto.protowire.NotifyFinalityConflictsResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.NotifyFinalityConflictsResponseMessage} returns this
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.NotifyFinalityConflictsResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.FinalityConflictNotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.FinalityConflictNotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.FinalityConflictNotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.FinalityConflictNotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    violatingblockhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.FinalityConflictNotificationMessage}
 */
proto.protowire.FinalityConflictNotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.FinalityConflictNotificationMessage;
  return proto.protowire.FinalityConflictNotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.FinalityConflictNotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.FinalityConflictNotificationMessage}
 */
proto.protowire.FinalityConflictNotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setViolatingblockhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.FinalityConflictNotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.FinalityConflictNotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.FinalityConflictNotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.FinalityConflictNotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViolatingblockhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string violatingBlockHash = 1;
 * @return {string}
 */
proto.protowire.FinalityConflictNotificationMessage.prototype.getViolatingblockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.FinalityConflictNotificationMessage} returns this
 */
proto.protowire.FinalityConflictNotificationMessage.prototype.setViolatingblockhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.FinalityConflictResolvedNotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.FinalityConflictResolvedNotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    finalityblockhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.FinalityConflictResolvedNotificationMessage}
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.FinalityConflictResolvedNotificationMessage;
  return proto.protowire.FinalityConflictResolvedNotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.FinalityConflictResolvedNotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.FinalityConflictResolvedNotificationMessage}
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinalityblockhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.FinalityConflictResolvedNotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.FinalityConflictResolvedNotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinalityblockhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string finalityBlockHash = 1;
 * @return {string}
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.prototype.getFinalityblockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.FinalityConflictResolvedNotificationMessage} returns this
 */
proto.protowire.FinalityConflictResolvedNotificationMessage.prototype.setFinalityblockhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ShutDownRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ShutDownRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ShutDownRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ShutDownRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ShutDownRequestMessage}
 */
proto.protowire.ShutDownRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ShutDownRequestMessage;
  return proto.protowire.ShutDownRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ShutDownRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ShutDownRequestMessage}
 */
proto.protowire.ShutDownRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ShutDownRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ShutDownRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ShutDownRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ShutDownRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.ShutDownResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.ShutDownResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.ShutDownResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ShutDownResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.ShutDownResponseMessage}
 */
proto.protowire.ShutDownResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.ShutDownResponseMessage;
  return proto.protowire.ShutDownResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.ShutDownResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.ShutDownResponseMessage}
 */
proto.protowire.ShutDownResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.ShutDownResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.ShutDownResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.ShutDownResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.ShutDownResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.ShutDownResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.ShutDownResponseMessage} returns this
*/
proto.protowire.ShutDownResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.ShutDownResponseMessage} returns this
 */
proto.protowire.ShutDownResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.ShutDownResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetHeadersRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetHeadersRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetHeadersRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetHeadersRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    starthash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isascending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetHeadersRequestMessage}
 */
proto.protowire.GetHeadersRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetHeadersRequestMessage;
  return proto.protowire.GetHeadersRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetHeadersRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetHeadersRequestMessage}
 */
proto.protowire.GetHeadersRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStarthash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsascending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetHeadersRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetHeadersRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetHeadersRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetHeadersRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarthash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIsascending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string startHash = 1;
 * @return {string}
 */
proto.protowire.GetHeadersRequestMessage.prototype.getStarthash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protowire.GetHeadersRequestMessage} returns this
 */
proto.protowire.GetHeadersRequestMessage.prototype.setStarthash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.protowire.GetHeadersRequestMessage.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protowire.GetHeadersRequestMessage} returns this
 */
proto.protowire.GetHeadersRequestMessage.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool isAscending = 3;
 * @return {boolean}
 */
proto.protowire.GetHeadersRequestMessage.prototype.getIsascending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protowire.GetHeadersRequestMessage} returns this
 */
proto.protowire.GetHeadersRequestMessage.prototype.setIsascending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.GetHeadersResponseMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.GetHeadersResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.GetHeadersResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.GetHeadersResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetHeadersResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    headersList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.GetHeadersResponseMessage}
 */
proto.protowire.GetHeadersResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.GetHeadersResponseMessage;
  return proto.protowire.GetHeadersResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.GetHeadersResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.GetHeadersResponseMessage}
 */
proto.protowire.GetHeadersResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addHeaders(value);
      break;
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.GetHeadersResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.GetHeadersResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.GetHeadersResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.GetHeadersResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string headers = 1;
 * @return {!Array<string>}
 */
proto.protowire.GetHeadersResponseMessage.prototype.getHeadersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.GetHeadersResponseMessage} returns this
 */
proto.protowire.GetHeadersResponseMessage.prototype.setHeadersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.GetHeadersResponseMessage} returns this
 */
proto.protowire.GetHeadersResponseMessage.prototype.addHeaders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.GetHeadersResponseMessage} returns this
 */
proto.protowire.GetHeadersResponseMessage.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.GetHeadersResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.GetHeadersResponseMessage} returns this
*/
proto.protowire.GetHeadersResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.GetHeadersResponseMessage} returns this
 */
proto.protowire.GetHeadersResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.GetHeadersResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyTransactionAddedRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyTransactionAddedRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyTransactionAddedRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyTransactionAddedRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.protowire.TransactionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyTransactionAddedRequestMessage}
 */
proto.protowire.NotifyTransactionAddedRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyTransactionAddedRequestMessage;
  return proto.protowire.NotifyTransactionAddedRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyTransactionAddedRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyTransactionAddedRequestMessage}
 */
proto.protowire.NotifyTransactionAddedRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.TransactionMessage;
      reader.readMessage(value,proto.protowire.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyTransactionAddedRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyTransactionAddedRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyTransactionAddedRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyTransactionAddedRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.TransactionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionMessage transaction = 1;
 * @return {?proto.protowire.TransactionMessage}
 */
proto.protowire.NotifyTransactionAddedRequestMessage.prototype.getTransaction = function() {
  return /** @type{?proto.protowire.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionMessage, 1));
};


/**
 * @param {?proto.protowire.TransactionMessage|undefined} value
 * @return {!proto.protowire.NotifyTransactionAddedRequestMessage} returns this
*/
proto.protowire.NotifyTransactionAddedRequestMessage.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.NotifyTransactionAddedRequestMessage} returns this
 */
proto.protowire.NotifyTransactionAddedRequestMessage.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.NotifyTransactionAddedRequestMessage.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyTransactionAddedResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyTransactionAddedResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyTransactionAddedResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyTransactionAddedResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyTransactionAddedResponseMessage}
 */
proto.protowire.NotifyTransactionAddedResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyTransactionAddedResponseMessage;
  return proto.protowire.NotifyTransactionAddedResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyTransactionAddedResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyTransactionAddedResponseMessage}
 */
proto.protowire.NotifyTransactionAddedResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyTransactionAddedResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyTransactionAddedResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyTransactionAddedResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyTransactionAddedResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.NotifyTransactionAddedResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.NotifyTransactionAddedResponseMessage} returns this
*/
proto.protowire.NotifyTransactionAddedResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.NotifyTransactionAddedResponseMessage} returns this
 */
proto.protowire.NotifyTransactionAddedResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.NotifyTransactionAddedResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.TransactionAddedNotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.TransactionAddedNotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.TransactionAddedNotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionAddedNotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.protowire.TransactionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.TransactionAddedNotificationMessage}
 */
proto.protowire.TransactionAddedNotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.TransactionAddedNotificationMessage;
  return proto.protowire.TransactionAddedNotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.TransactionAddedNotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.TransactionAddedNotificationMessage}
 */
proto.protowire.TransactionAddedNotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protowire.TransactionMessage;
      reader.readMessage(value,proto.protowire.TransactionMessage.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.TransactionAddedNotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.TransactionAddedNotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.TransactionAddedNotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.TransactionAddedNotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protowire.TransactionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionMessage transaction = 1;
 * @return {?proto.protowire.TransactionMessage}
 */
proto.protowire.TransactionAddedNotificationMessage.prototype.getTransaction = function() {
  return /** @type{?proto.protowire.TransactionMessage} */ (
    jspb.Message.getWrapperField(this, proto.protowire.TransactionMessage, 1));
};


/**
 * @param {?proto.protowire.TransactionMessage|undefined} value
 * @return {!proto.protowire.TransactionAddedNotificationMessage} returns this
*/
proto.protowire.TransactionAddedNotificationMessage.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.TransactionAddedNotificationMessage} returns this
 */
proto.protowire.TransactionAddedNotificationMessage.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.TransactionAddedNotificationMessage.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage}
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyUTXOOfAddressChangedRequestMessage;
  return proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage}
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string addresses = 1;
 * @return {!Array<string>}
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.prototype.getAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage} returns this
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.prototype.setAddressesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage} returns this
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.prototype.addAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedRequestMessage} returns this
 */
proto.protowire.NotifyUTXOOfAddressChangedRequestMessage.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.NotifyUTXOOfAddressChangedResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.protowire.RPCError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedResponseMessage}
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.NotifyUTXOOfAddressChangedResponseMessage;
  return proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.NotifyUTXOOfAddressChangedResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedResponseMessage}
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new proto.protowire.RPCError;
      reader.readMessage(value,proto.protowire.RPCError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.NotifyUTXOOfAddressChangedResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.protowire.RPCError.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPCError error = 1000;
 * @return {?proto.protowire.RPCError}
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.prototype.getError = function() {
  return /** @type{?proto.protowire.RPCError} */ (
    jspb.Message.getWrapperField(this, proto.protowire.RPCError, 1000));
};


/**
 * @param {?proto.protowire.RPCError|undefined} value
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedResponseMessage} returns this
*/
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protowire.NotifyUTXOOfAddressChangedResponseMessage} returns this
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protowire.NotifyUTXOOfAddressChangedResponseMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 1000) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protowire.UTXOOfAddressChangedNotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protowire.UTXOOfAddressChangedNotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    changedaddressesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protowire.UTXOOfAddressChangedNotificationMessage}
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protowire.UTXOOfAddressChangedNotificationMessage;
  return proto.protowire.UTXOOfAddressChangedNotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protowire.UTXOOfAddressChangedNotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protowire.UTXOOfAddressChangedNotificationMessage}
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addChangedaddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protowire.UTXOOfAddressChangedNotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protowire.UTXOOfAddressChangedNotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangedaddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string changedAddresses = 1;
 * @return {!Array<string>}
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.prototype.getChangedaddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protowire.UTXOOfAddressChangedNotificationMessage} returns this
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.prototype.setChangedaddressesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protowire.UTXOOfAddressChangedNotificationMessage} returns this
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.prototype.addChangedaddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protowire.UTXOOfAddressChangedNotificationMessage} returns this
 */
proto.protowire.UTXOOfAddressChangedNotificationMessage.prototype.clearChangedaddressesList = function() {
  return this.setChangedaddressesList([]);
};


goog.object.extend(exports, proto.protowire);
